import { useState, useEffect } from 'react';
import { Vehicle } from '@/types/vehicle';

export const useVehicleData = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('/api/vehicles');
        const data = await res.json();
        setVehicles(data);
      } catch (error) {
        console.error('Failed to fetch vehicles:', error);
      }
    };

    getData();
    const interval = setInterval(getData, 5000);

    // ✅ ต้อง return จาก useEffect เพื่อ cleanup
    return () => clearInterval(interval);
  }, []);

  return vehicles;
};
