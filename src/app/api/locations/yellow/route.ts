import { NextResponse } from 'next/server';

export async function GET() {
  const locationsYellow = [
    {
      position: [16.742692739085907, 100.1981180513099],
      name: 'ตำแหน่งที่ 1',
      urlicon: '/assets/pin-yellow.svg',
    },
    {
      position: [16.74220056565889, 100.19579454434535],
      name: 'ตำแหน่งที่ 2',
      urlicon: '/assets/pin-yellow.svg',
    },
    {
      position: [16.74324337855917, 100.19196703214297],
      name: 'ตำแหน่งที่ 3',
      urlicon: '/assets/pin-yellow.svg',
    },
    {
      position: [16.745196987011408, 100.192734049225],
      name: 'ตำแหน่งที่ 4',
      urlicon: '/assets/pin-yellow.svg',
    },
    {
      position: [16.745472841888397, 100.19044581428079],
      name: 'ตำแหน่งที่ 5',
      urlicon: '/assets/pin-yellow.svg',
    },
    {
      position: [16.750780108511602, 100.18983604291755],
      name: 'ตำแหน่งที่ 6',
      urlicon: '/assets/pin-yellow.svg',
    },
    {
      position: [16.75012643646096, 100.19110149742973],
      name: 'ตำแหน่งที่ 7',
      urlicon: '/assets/pin-yellow.svg',
    },
    {
      position: [16.74992181968233, 100.1938288670161],
      name: 'ตำแหน่งที่ 7',
      urlicon: '/assets/pin-yellow.svg',
    },
    {
      position: [16.748063567747828, 100.19388385231518],
      name: 'ตำแหน่งที่ 8',
      urlicon: '/assets/pin-yellow.svg',
    },
    {
      position: [16.74828702125138, 100.1958499115019],
      name: 'ตำแหน่งที่ 9',
      urlicon: '/assets/pin-yellow.svg',
    },
    {
      position: [16.746272077539984, 100.1970193546381],
      name: 'ตำแหน่งที่ 10',
      urlicon: '/assets/pin-yellow.svg',
    },
    {
      position: [16.74514469972377, 100.19265134858604],
      name: 'ตำแหน่งที่ 11',
      urlicon: '/assets/pin-yellow.svg',
    },
    {
      position: [16.742176437434285, 100.19884208481615],
      name: 'ตำแหน่งที่ 12',
      urlicon: '/assets/pin-yellow.svg',
    },
   
  ];

  return NextResponse.json(locationsYellow);
}
