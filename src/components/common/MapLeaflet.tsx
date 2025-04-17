'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { useEffect } from 'react'
import 'leaflet/dist/leaflet.css'

// ตั้งค่า icon
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import CustomMarker from './CustomMarker'

const MapLeaflet = () => {
    const locationsRed: { position: [number, number], name: string, urlicon: string }[] = [
        {
            position: [16.74239723444188, 100.1987686724579],
            name: 'ตำแหน่งที่ 1',
            urlicon: '/assets/pin-red.svg',
        },
        {
            position: [16.7439985601929, 100.19773639866224],
            name: 'ตำแหน่งที่ 2',
            urlicon: '/assets/pin-red.svg',
        },
        {
            position: [16.746697471003706, 100.19662304083388],
            name: 'ตำแหน่งที่ 3',
            urlicon: '/assets/pin-red.svg',
        },
        {
            position: [16.748332736666736, 100.19565528273064],
            name: 'ตำแหน่งที่ 4',
            urlicon: '/assets/pin-red.svg',
        },
        {
            position: [16.749550168126742, 100.19505983234454],
            name: 'ตำแหน่งที่ 5',
            urlicon: '/assets/pin-red.svg',
        },
        {
            position: [16.749768712847047, 100.19264787150264],
            name: 'ตำแหน่งที่ 6',
            urlicon: '/assets/pin-red.svg',
        },
        {
            position: [16.749768712847047, 100.19264787150264],
            name: 'ตำแหน่งที่ 7',
            urlicon: '/assets/pin-red.svg',
        },
        {
            position: [16.749768712847047, 100.19264787150264],
            name: 'ตำแหน่งที่ 7',
            urlicon: '/assets/pin-red.svg',
        },
        {
            position: [16.74635933581115, 100.19005219582002],
            name: 'ตำแหน่งที่ 8',
            urlicon: '/assets/pin-red.svg',
        },
        {
            position: [16.74820989914891, 100.1937482798101],
            name: 'ตำแหน่งที่ 9',
            urlicon: '/assets/pin-red.svg',
        },

        {
            position: [16.744370056629652, 100.19134636159157],
            name: 'ตำแหน่งที่ 10',
            urlicon: '/assets/pin-red.svg',
        },
        {
            position: [16.74514469972377, 100.19265134858604],
            name: 'ตำแหน่งที่ 11',
            urlicon: '/assets/pin-red.svg',
        },
        {
            position: [16.74252192303345, 100.19293356043724],
            name: 'ตำแหน่งที่ 12',
            urlicon: '/assets/pin-red.svg',
        },
        {
            position: [16.742625942315367, 100.19536908276685],
            name: 'ตำแหน่งที่ 12',
            urlicon: '/assets/pin-red.svg',
        },



    ];
    useEffect(() => {
        // แก้ไข default icon
        delete (L.Icon.Default.prototype as any)._getIconUrl
        L.Icon.Default.mergeOptions({
            iconUrl,
            shadowUrl: iconShadow,
        })
    }, [])

    return (
        <MapContainer
            center={[16.74460392091608, 100.19462779204149]}
            zoom={16}
            minZoom={15}
            maxZoom={18}
            maxBounds={[
                [16.7266, 100.1726], // พิกัด SW (ประมาณ 2 กม. ทางใต้และตะวันตก)
                [16.7626, 100.2166], // พิกัด NE (ประมาณ 2 กม. ทางเหนือและตะวันออก)
            ]}
            maxBoundsViscosity={1.0}
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locationsRed.map((loc, idx) => (
                <CustomMarker key={idx} position={loc.position} text={loc.name} urlicon={loc.urlicon} />
            ))}


        </MapContainer>
    )
}

export default MapLeaflet
