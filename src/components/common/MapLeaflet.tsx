'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import CustomMarker from './CustomMarker';
import VehicleMarkers from './VehicleMarkers';


interface MapLeafletProps {
  redOpen: boolean;
  yellowOpen: boolean;
}

interface Location {
  position: [number, number];
  name: string;
  urlicon: string;
}

const MapLeaflet: React.FC<MapLeafletProps> = ({ redOpen, yellowOpen }) => {
  const [locationsRed, setLocationsRed] = useState<Location[]>([]);
  const [locationsYellow, setLocationsYellow] = useState<Location[]>([]);
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl,
      shadowUrl: iconShadow,
    });
  }, []);

  // ดึงข้อมูลจาก API
  useEffect(() => {
    const fetchRedLocations = async () => {
      try {
        const res = await fetch('/api/locations/red');
        const data = await res.json();
        setLocationsRed(data);
      } catch (error) {
        console.error('Error fetching red locations:', error);
      }
    };
    fetchRedLocations();

    const fetchYellowLocations = async () => {
      try {
        const res = await fetch('/api/locations/yellow');
        const data = await res.json();
        setLocationsYellow(data);
      } catch (error) {
        console.error('Error fetching yellow locations:', error);
      }
    };

    fetchYellowLocations();
  }, []);



  return (
    <MapContainer
      center={[16.74460392091608, 100.19462779204149]}
      zoom={16}
      minZoom={15}
      maxZoom={18}
      maxBounds={[
        [16.7266, 100.1726],
        [16.7626, 100.2166],
      ]}
      maxBoundsViscosity={1.0}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {redOpen &&
        locationsRed.map((loc, idx) => (
          <CustomMarker key={idx} position={loc.position} text={loc.name} urlicon={loc.urlicon} />
        ))
      }
      {yellowOpen &&
        locationsYellow.map((loc, idx) => (
          <CustomMarker key={`yellow-${idx}`} position={loc.position} text={loc.name} urlicon={loc.urlicon} />
        ))
      }
      <VehicleMarkers/>
    </MapContainer>
  );
};

export default MapLeaflet;
