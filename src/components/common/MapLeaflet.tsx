'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import CustomMarker from './CustomMarker';
import VehicleMarkers from './VehicleMarkers';
import { Polyline } from 'react-leaflet';
import ArrowLine from './ArrowLine';

interface MapLeafletProps {
  redOpen: boolean;
  yellowOpen: boolean;
  redLineOpen: boolean; // เส้นทางแดง
  yellowLineOpen: boolean; // เส้นทางเหลือง
}

interface Location {
  position: [number, number];
  name: string;
  urlicon: string;
}

const roadPathR: [number, number][] = [
  [16.7381400302849, 100.19951907404125],
  [16.740985980653786, 100.1991006494353],
  [16.74289695598417, 100.19846764810323],

  [16.744099011313324, 100.197695171893],
  [16.74520859408036, 100.19751278167583],
  [16.748445739524303, 100.1956540046416],
  [16.749472208458055, 100.1950022340607],
  [16.74967344388921, 100.19465085850514],

  [16.74940632896904, 100.19453284131262],


  [16.748861824317284, 100.19345995774422],
  [16.74837382354197, 100.19367453445793],
  [16.747844726551293, 100.1943611799417],
  [16.747711167855208, 100.19445773946283],

  [16.748445739524303, 100.1956540046416],//

  [16.749472208458055, 100.1950022340607],
  [16.74967344388921, 100.19465085850514],

  [16.749852333326675, 100.19397226577718],
  [16.749672544648288, 100.19207862627896],
  [16.75080561757594, 100.18967292202281],

  [16.750055644578403, 100.18930814160956],
  [16.749567646863166, 100.19007525336097],
  [16.748328109765705, 100.19019397917933],

  [16.747340382672945, 100.18963516210324],
  [16.742223976678943, 100.19252658340498],
  [16.74297398053197, 100.19401252719138],

  [16.74213664727154, 100.19659281226212],
  [16.742903346732536, 100.1984649942197],

];


const roadPathY: [number, number][] = [
  [16.7381400302849, 100.19951907404125],
  [16.740985980653786, 100.1991006494353],
  [16.74292939193448, 100.1984607338775],
  [16.74213572320624, 100.19654563670792],
  [16.742372893212845, 100.19581078101777],
  [16.74210962082106, 100.19563979019907],
  [16.741714069421494, 100.19584632028598],
  [16.740385406239447, 100.1936373514412],
  [16.742229654149323, 100.19251744268594],
  [16.746667990001413, 100.18972794534854],
  [16.74691456122802, 100.18962065695673],
  [16.74740128152273, 100.18961931585227],
  [16.74763757799818, 100.18980304716334],
  [16.748619463651973, 100.19029717021564],
  [16.749501447951893, 100.19011173926921],
  [16.749866162285684, 100.18974159442872],
  [16.750148686988172, 100.18920515264453],
  [16.750883249264668, 100.18954847538416],
  [16.749799383656313, 100.19160841191308],
  [16.749670963153335, 100.19209120951886],
  [16.749758289103273, 100.19309972010319],
  [16.74987129909487, 100.19400630678032],
  [16.749635005387663, 100.19469295228876],
  [16.74940632896904, 100.19453284131262],
  [16.748861824317284, 100.19345995774422],
  [16.74837382354197, 100.19367453445793],
  [16.747844726551293, 100.1943611799417],
  [16.747711167855208, 100.19445773946283],
  [16.748429378628252, 100.19566623967104],
  [16.74512358700108, 100.19752834076314],
  [16.74413215412527, 100.19770000213408],
  [16.74290441400252, 100.19846174950241],
];
const MapLeaflet: React.FC<MapLeafletProps> = ({ redOpen, yellowOpen, redLineOpen, yellowLineOpen }) => {
  const [locationsRed, setLocationsRed] = useState<Location[]>([]);
  const [locationsYellow, setLocationsYellow] = useState<Location[]>([]);
  // const [colorLine, setColorLine] = useState<String>("");
  useEffect(() => {
    console.log('redLineOpen:', redLineOpen);
    console.log('yellowLineOpen:', yellowLineOpen);
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
      <VehicleMarkers />

      {redLineOpen && (
        <>
          <Polyline
            positions={roadPathR}
            pathOptions={{ color: '#E94B3E', weight: 5 }}
          />
          <ArrowLine positions={roadPathR} color = {"#E94B3E"}/>
        </>
      )}
      {yellowLineOpen &&
        <>
          <Polyline
            positions={roadPathY}
            pathOptions={{ color: '#F29900', weight: 5 }}
          />
          <ArrowLine positions={roadPathY} color = {"#F29900"}/>
        </>
      }


    </MapContainer>
  );
};

export default MapLeaflet;
