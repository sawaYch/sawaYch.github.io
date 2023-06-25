import { useCallback, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
} from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';
import { geoOrthographic, geoCircle } from 'd3-geo';
import cn from 'classnames';
import worldJson from '../topojson/world-continents.json';
import PaneContainer from './pane-container';

interface LocationPaneProps {
  center: [number, number]; // [lon, lat]; [114.1694, 22.3193] hong kong
  className?: string;
}

const LocationPane = ({ center, className }: LocationPaneProps) => {
  const colors = scaleLinear<string>()
    .domain([10, 100])
    .range(['#d3b6fc', '#bd93f9']);

  const extractColor = useCallback(
    (rsmKey: string) => {
      const idx = Number(rsmKey.split('geo-').pop());
      return colors(idx);
    },
    [colors]
  );

  const scale = 225;

  const [rotation] = useState<[number, number, number]>([-100, -15, 10]);

  const projection = useCallback(
    () =>
      geoOrthographic()
        .rotate(rotation)
        .translate([384, 300])
        .scale(scale)
        .center([0, 0])
        .precision(0.1),
    [rotation]
  );

  const circles = [geoCircle().center(center).radius(2)()];

  return (
    <PaneContainer className="pb-8 pl-4 pr-4 pointer-events-none select-none">
      <div className="mt-2 text-xs">
        <span className="font-bold text-dracula-pink">→ </span>[
        <span className="text-dracula-light bg-dracula-dark">{center[0]}</span>,
        <span className="text-dracula-light bg-dracula-dark">{center[1]}</span>{' '}
        🇭🇰 ]
      </div>

      <ComposableMap
        className={cn(' w-full h-full', className)}
        // @ts-ignore
        projection={projection()}
      >
        <filter id="sofGlow" height="300%" width="300%" x="-75%" y="-75%">
          <feMorphology
            operator="dilate"
            radius="15"
            in="SourceAlpha"
            result="thicken"
          />
          <feGaussianBlur in="thicken" stdDeviation="15" result="blurred" />
          <feFlood floodColor="#bd93f9" result="glowColor" />
          <feComposite
            in="glowColor"
            in2="blurred"
            operator="in"
            result="softGlow_colored"
          />
          <feMerge>
            <feMergeNode in="softGlow_colored" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <circle
          cx={384}
          cy={300}
          r={scale}
          fill="#6272a4"
          stroke="#bd93f9"
          filter="url(#sofGlow)"
        />
        <Graticule style={{ strokeWidth: 0.5 }} />
        <Geographies geography={worldJson}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={extractColor(geo.rsmKey)}
                stroke="#000000"
              />
            ))
          }
        </Geographies>
        <Geographies geography={circles}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: '#ff5555' },
                }}
              />
            ))
          }
        </Geographies>
        <Marker coordinates={center}>
          <text
            textAnchor="right"
            x="5"
            y="-5"
            filter="url(#sofGlow)"
            fontSize="8rem"
            fontWeight="bold"
          >
            👾
          </text>
        </Marker>
      </ComposableMap>
    </PaneContainer>
  );
};

export default LocationPane;
