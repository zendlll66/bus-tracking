'use client'
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const CustomMarker = ({ position, text, urlicon }: { position: [number, number], text: string, urlicon: string }) => {
    const customIcon = L.icon({
        iconUrl: urlicon,
        iconSize: [25, 40],
        iconAnchor: [20, 40],
    });

    const [lat, lng] = position;
    const streetViewLink = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lng}`;

    return (
        <Marker position={position} icon={customIcon}>
            <Popup>
                <div className="w-[250px] text-center space-y-2">
                    <h4 className="text-lg font-semibold ">{text}</h4>
                    
                    <a
                        href={streetViewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 text-red-600 py-2 bg-[#FF8811] hover:bg-orange-500   rounded-md  transition duration-200 text-sm"
                    >
                        <span className='text-white'>ดู Street View</span>
                    </a>
                </div>
            </Popup>
        </Marker>
    );
};

export default CustomMarker;
