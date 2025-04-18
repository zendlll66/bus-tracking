import { NextResponse } from 'next/server';

export async function GET() {
  const locationsRed = [

    {
      position: [16.74400777771125, 100.1976565484588],
      name: 'ตำแหน่งที่ 1',
      urlicon: '/assets/pin-red.svg',
    },
    {
      position: [16.746697471003706, 100.19662304083388],
      name: 'ตำแหน่งที่ 2',
      urlicon: '/assets/pin-red.svg',
    },
    {
      position: [16.748332736666736, 100.19565528273064],
      name: 'ตำแหน่งที่ 3',
      urlicon: '/assets/pin-red.svg',
    },
    {
      position: [16.749550168126742, 100.19505983234454],
      name: 'ตำแหน่งที่ 4',
      urlicon: '/assets/pin-red.svg',
    },
    {
      position: [16.74820989914891, 100.1937482798101],
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
      position: [16.74635933581115, 100.19005219582002],
      name: 'ตำแหน่งที่ 8',
      urlicon: '/assets/pin-red.svg',
    },
    {
      position: [16.744370056629652, 100.19134636159157],
      name: 'ตำแหน่งที่ 9',
      urlicon: '/assets/pin-red.svg',
    },
    {
      position: [16.74514469972377, 100.19265134858604],
      name: 'ตำแหน่งที่ 10',
      urlicon: '/assets/pin-red.svg',
    },
    {
      position: [16.74252192303345, 100.19293356043724],
      name: 'ตำแหน่งที่ 11',
      urlicon: '/assets/pin-red.svg',
    },
    {
      position: [16.742625942315367, 100.19536908276685],
      name: 'ตำแหน่งที่ 12',
      urlicon: '/assets/pin-red.svg',
    },
    {
      position: [16.74239723444188, 100.1987686724579],
      name: 'ตำแหน่งที่ 13',
      urlicon: '/assets/pin-red.svg',
    },
  ];

  return NextResponse.json(locationsRed);
}
