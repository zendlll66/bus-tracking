import { Vehicle } from '@/types/vehicle';

export const fetchVehicles = async (): Promise<Vehicle[]> => {
  const res = await fetch('https://transit.nu.ac.th/allGPS', {
    cache: 'no-store', // ปิด cache เพื่อให้ได้ตำแหน่งสด
  });
  if (!res.ok) {
    throw new Error('Failed to fetch vehicle data');
  }
  return res.json();
  
};

