// app/api/vehicles/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://transit.nu.ac.th/allGPS');
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch vehicle data' }, { status: 500 });
  }
}
