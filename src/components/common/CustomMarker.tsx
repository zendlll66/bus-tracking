// components/CustomMarker.tsx
'use client'
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';



const CustomMarker = ({ position, text, urlicon }: { position: [number, number], text: string, urlicon: string }) => {
    const customIcon = L.icon({
        iconUrl: urlicon,
        iconSize: [30, 40],
        iconAnchor: [20, 40],
    });

    return (
        <div>
            <Marker position={position} icon={customIcon}>
                <Popup>{text}</Popup>
            </Marker>
        </div>
    );
};

export default CustomMarker;
