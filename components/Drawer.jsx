'use client'

import { CityContext } from "@/context/CityContext";
import { useContext } from "react";

export default function Drawer(props) {
    let drawerOpen = props.drawerOpen;
    let setDrawerOpen = props.setDrawerOpen;

    const ciudades = ["Santa Cruz", "Salt Lake", "Arequipa", "Buenos Aires"]

    const { setCityName } = useContext(CityContext);

    const handleClickButton = (ciudad) => {
        setCityName(ciudad);
        setDrawerOpen(false);
    }

    return (
        <>
            {
                drawerOpen ? (
                    <div className="z-10 top-0 left-0 m-0 p-0 bg-[#1e213a] absolute w-full h-full">
                        <div className="w-full px-5 py-2 flex flex-col gap-2 text-white">
                            <button
                                className="self-end mt-4 mb-3"
                                onClick={() => setDrawerOpen(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
                                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                </svg>
                            </button>

                            {
                                ciudades.map((ciudad, index) => (
                                    <button
                                        className="w-3/4 border-2 py-1 pl-4 text-left"
                                        onClick={() => handleClickButton(ciudad)}
                                        key={index}
                                    >
                                        {ciudad}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}
