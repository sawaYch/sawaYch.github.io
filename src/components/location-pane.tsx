import { useCallback, useEffect, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';
import { timer } from 'd3';
import { geoOrthographic } from 'd3-geo';
import cn from 'classnames';

interface LocationPaneProps {
  center: [number, number]; // [lon, lat]; [114.1694, 22.3193] hong kong
  className?: string;
}

const LocationPane = ({ center, className }: LocationPaneProps) => {
  const geoUrl =
    'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

  const colors = scaleLinear<string>()
    .domain([10, 100])
    .range(['#282a36', '#bd93f9']);

  const extractColor = useCallback(
    (rsmKey: string) => {
      const idx = Number(rsmKey.split('geo-').pop());
      return colors(idx);
    },
    [colors]
  );

  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

  const projection = useCallback(
    () =>
      geoOrthographic()
        .rotate(rotation)
        .translate([384, 300])
        .scale(290)
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

  return (
    <ComposableMap
      className={cn(
        'p-8 border border-dracula-aro select-none bg-dracula-darker w-full h-full',
        className
      )}
      // @ts-ignore
      projection={projection()}
    >
      <circle cx={384} cy={300} r={290} fill="#6272a4" stroke="#bd93f9" />
      <Geographies geography={geoUrl}>
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
      <Marker coordinates={center}>
        <circle r={15} fill="#ff5555" />
        <text
          textAnchor="right"
          x="25"
          y="-10"
          fill="#ff5555"
          fontSize="8rem"
          fontWeight="bold"
        >
          👾
        </text>
      </Marker>
    </ComposableMap>
  );
};

export default LocationPane;
