'use client';

import { Marker, Popup } from 'react-leaflet';
import { useVehicleData } from '@/hooks/useVehicleData';
import L from 'leaflet';
import { Vehicle } from '@/types/vehicle';

// แยกไอคอนตามสี
const redIcon = new L.Icon({
  iconUrl: '/assets/bus-icon-red.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const yellowIcon = new L.Icon({
  iconUrl: '/assets/bus-icon-yellow.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const blueIcon = new L.Icon({
  iconUrl: '/assets/bus-icon-Blue.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// gpsIDs แยกตามสาย
const redIDs = ['540220', '540249', '540248', '540246', '540245', '540223'];
const yellowIDs = ['540247', '540219', '540227', '540224', '540225', '540212'];
const blueIDs = ['535706', '542080', '542082', '542083'];

const getIconByGpsID = (gpsID: string) => {
  if (redIDs.includes(gpsID)) return redIcon;
  if (yellowIDs.includes(gpsID)) return yellowIcon;
  if (blueIDs.includes(gpsID)) return blueIcon;
  return blueIcon; // default
};

const VehicleMarkers = () => {
  const vehicles = useVehicleData();

  return (
    <>
      {vehicles.map((bus: Vehicle) => (
        <Marker
          key={bus.gpsID}
          position={[bus.Latitude, bus.Longitude]}
          icon={getIconByGpsID(bus.gpsID)}
        >
          <Popup>{bus.plateNumber}</Popup>
        </Marker>
      ))}
    </>
  );
};

export default VehicleMarkers;
