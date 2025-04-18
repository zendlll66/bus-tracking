'use client' // ❌ ห้ามใส่! หน้านี้ต้องเป็น Server Component

import DropdownSettings from '@/components/common/DropdownSettings'
import dynamic from 'next/dynamic'
import React from 'react'
import { useState } from 'react';

// ✅ dynamic import แทนการ import ตรง
const MapLeaflet = dynamic(() => import('@/components/common/MapLeaflet'), {
  ssr: false,
  loading: () => <p>กำลังโหลดแผนที่...</p>,
})

const Page = () => {
  const [redOpen, setRedOpen] = useState(true);
  return (
    <div className="relative h-screen w-full">
      {/* ✅ ส่วนที่ลอยอยู่ด้านบนซ้ายของ Map */}
      <div className="absolute top-4 right-4 z-50">
        <DropdownSettings setRedOpen={setRedOpen}/>
      </div>

      {/* ✅ Map เต็มหน้าจอ */}
      <div className="absolute inset-0 z-10">
        <MapLeaflet redOpen ={redOpen}/>
      </div>
    </div>
  )
}

export default Page


