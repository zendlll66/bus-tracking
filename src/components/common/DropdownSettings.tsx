'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface DropdownSettingsProps {
  setRedOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setYellowOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setRedLineOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setYellowLineOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownSettings: React.FC<DropdownSettingsProps> = ({ setRedOpen, setYellowOpen,setRedLineOpen,setYellowLineOpen }) => {
  const [open, setOpen] = useState(false);
  const [redChecked, setRedChecked] = useState(true);
  const [yellowChecked, setYellowChecked] = useState(true);
  const [redLineChecked, setRedLineChecked] = useState(false);
  const [yellowLineChecked, setYellowLineChecked] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // ปิด dropdown เมื่อคลิกนอก
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 🆕 trigger setRedOpen เมื่อ checkbox เปลี่ยน
  const handleRedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setRedChecked(isChecked);
    setRedOpen(isChecked); // ส่งให้ Map ใช้แสดง/ซ่อนป้าย
  };

  const handleYellowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setYellowChecked(isChecked);
    setYellowOpen(isChecked);
  };

  const handleRedLineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setRedLineChecked(isChecked);
    setRedLineOpen(isChecked); // ส่งให้ Map ใช้แสดง/ซ่อน "สายเดินรถ"
  };

  const handleYellowLineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setYellowLineChecked(isChecked);
    setYellowLineOpen(isChecked);
  };


  return (
    <div className="relative min-w-lg inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="absolute w-fit right-0 mr-4 flex items-center gap-2 px-4 py-2 text-white text-sm font-medium rounded-[16px] bg-[#FF8811] hover:bg-orange-500 transition whitespace-nowrap"
        title="Settings"
        aria-label="Settings"
      >
        <Image src="/assets/setting.svg" alt="setting" width={20} height={20} />
        <span className='static'>ตั้งค่า</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.5 }}
            className="absolute right-0  mr-4 w-60 rounded-[16px] shadow-lg bg-white z-50 p-4 space-y-2"
          >
            {/* ป้ายรถ */}
            <h4 className="text-sm font-semibold text-gray-700 mb-2">ป้ายรถ</h4>
            <div className="flex flex-col gap-2 text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={redChecked}
                  onChange={handleRedChange}
                />
                ป้ายสายสีแดง
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={yellowChecked}
                  onChange={handleYellowChange}
                />
                ป้ายสายสีเหลือง
              </label>
            </div>

            {/* สายเดินรถ */}
            <h4 className="text-sm font-semibold text-gray-700 mb-2">สายเดินรถ</h4>
            <div className="flex flex-col gap-2 text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={redLineChecked}
                  onChange={handleRedLineChange}
                />
                สายสีแดง
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={yellowLineChecked}
                  onChange={handleYellowLineChange}
                />
                สายสีเหลือง
              </label>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownSettings;
