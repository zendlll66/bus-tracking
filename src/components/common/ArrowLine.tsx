
'use client';

import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import 'leaflet-polylinedecorator';
import L from 'leaflet';

interface ArrowLineProps {
  positions: [number, number][];
}

const ArrowLine: React.FC<ArrowLineProps> = ({ positions }) => {
  const map = useMap();

  useEffect(() => {
    const decorator = (L as any).polylineDecorator(L.polyline(positions), {
      patterns: [
        {
          offset: 10,
          repeat: 50,
          symbol: (L as any).Symbol.arrowHead({
            pixelSize: 10,
            polygon: false,
            pathOptions: { stroke: true, color: '#FF0000' },
          }),
        },
      ],
    });

    decorator.addTo(map);

    return () => {
      try {
        map.removeLayer(decorator);
      } catch {}
    };
  }, [map, positions]);

  return null;
};

export default ArrowLine;
