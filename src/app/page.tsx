'use client' // ❌ ห้ามใส่! หน้านี้ต้องเป็น Server Component

import dynamic from 'next/dynamic'
import React from 'react'

// ✅ dynamic import แทนการ import ตรง
const MapLeaflet = dynamic(() => import('@/components/common/MapLeaflet'), {
  ssr: false,
  loading: () => <p>กำลังโหลดแผนที่...</p>,
})

const Page = () => {
  return (
    <div>
      <div className="h-screen">
        <MapLeaflet />
      </div>
    </div>
  )
}

export default Page
