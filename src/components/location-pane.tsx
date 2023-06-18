import { useCallback, useEffect, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
} from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';
import { timer } from 'd3';
import { geoOrthographic, geoCircle } from 'd3-geo';
import cn from 'classnames';
import Typewriter from 'typewriter-effect';
import worldJson from '../topojson/world.json';

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

  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

  const projection = useCallback(
    () =>
      geoOrthographic()
        .rotate(rotation)
        .translate([384, 300])
        .scale(scale)
        .center([0, 0])
        .clipAngle(90)
        .precision(0.1),
    [rotation]
  );

  const startAnimation = useCallback(() => {
    const newRotation: [number, number, number] = [
      rotation[0] + 0.5,
      rotation[1] - 0.1,
      rotation[2],
    ];
    setRotation(newRotation);
  }, [rotation]);

  useEffect(() => {
    const autoAnimation = timer(startAnimation);

    return () => {
      autoAnimation.stop();
    };
  }, [startAnimation]);

  const circles = [geoCircle().center(center).radius(2)()];

  return (
    <div className="h-full w-full pl-4 pr-4 pb-8 border border-dracula-aro select-none bg-dracula-darker">
      <div className="text-xs mt-2">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pasteString(
                `<span style="color:#ff79c6; font-weight: bold;">→ </span>`,
                null
              )
              .typeString(
                '<span style="background-color: #3b425a">Void Dojo</span>'
              )
              .pauseFor(1000)
              .typeString(' . ')
              .pauseFor(1000)
              .typeString(' . ')
              .pauseFor(1000)
              .typeString(' . ')
              .pauseFor(2000)
              .typeString(`<span>Eureka! </span>`)
              .pauseFor(2000)
              .deleteAll(1)
              .typeString(
                `<span style="color:#ff79c6; font-weight: bold;">→ </span>[<span style="color:#bd93f9">${center[0]}, ${center[1]}</span>]`
              )
              .pauseFor(3000)
              .deleteAll(1)
              .start();
          }}
          options={{ cursor: '█', loop: true, delay: 75 }}
        />
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
            fill="#ff5555"
            fontSize="8rem"
            fontWeight="bold"
          >
            👾
          </text>
        </Marker>
      </ComposableMap>
    </div>
  );
};

export default LocationPane;
