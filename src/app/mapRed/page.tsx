
"use client"
import React, { useState } from "react";
import Spline from "@splinetool/react-spline";



const MapRed = () => {
    const [isImageExpanded, setIsImageExpanded] = useState(false);
    const toggleImage = () => {
        setIsImageExpanded(!isImageExpanded);
    };
    const [colorPage, setColorPage] = useState("red");
    const [data, setData] = useState(null);


    return (
        <>
            {isImageExpanded && (
                <div className="transform scale-100 fixed inset-0 overflow-hidden z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
                    <div
                        className="absolute top-0 right-0 p-5 hover:opacity-50 transition-opacity duration-300 z-56"
                        onClick={toggleImage}
                    >

                    </div>
                    <Spline scene="https://prod.spline.design/vfUeV0vhYvTZUFoU/scene.splinecode" />
                </div>
            )}
            <div
                className=" mini:p-[1rem] sm:flex-grow sm:flex sm:flex-col
                sm:absolute  sm:left-0 sm:right-0  sm:w-full sm:h-screen sm:p-[1.5rem]
                lg:flex-grow-0 lg:flex-shrink-0  lg:px-[1.5rem] lg:py-[1.5rem]"
            >

                <div className="flex flex-col">
                    <div className="lg:pl-[10rem] md:pl-[8rem] flex-grow flex flex-col">
                        <div className="relative font-kanit lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] mini:text-[1rem] animate-slide-in-slow-end">
                            <span>รถบัสสาย</span>
                            <span className="text-red-500"> สีแดง</span>
                        </div>
                        <span className="font-kanit sm:text-[1rem] md:text-[1.5rem] lg:text-[2rem] opacity-50 mini:text-[0.75rem] animate-slide-in-slow-end">
                            มีทั้งหมด 13 ป้าย{" "}
                            <span className="font-kanit text-[16px]">
                                (กดที่ภาพเพื่อดูภาพเต็ม)
                            </span>
                        </span>
                    </div>
                </div>
                <div
                    className={`  lg:flex lg:overflow-auto  md:overflow-auto md:flex md:items-start  `}
                >
                    <img
                        src={"/assets/MapRedEdit.png"}
                        className={`object-contain h-full max-w-full lg:pl-[20%] cursor-pointer `}
                        alt="Map"
                        onClick={toggleImage}
                    />
                </div>
            </div>
        </>
    );
};

export default MapRed;
