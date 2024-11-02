'use client'

import Image from "next/image"

import navigation from "@/public/images/navigation.svg"

import { API_KEY } from "@/utils/key"
import { useContext, useEffect, useState } from "react"

import axios from "axios"
import { CityContext } from "@/context/CityContext"

const fetchDataOfACity = async (city = 'Buenos Aires') => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

    return data;
}

export default function TodayHighlights(props) {
    // Usando la variable del contexto
    const {cityName} = useContext(CityContext)

    const [currentCityWeather, setCurrentCityWeather] = useState({})

    useEffect( () => {
        fetchDataOfACity(cityName)
        .then( (data) => {
            setCurrentCityWeather(data);
        } )
    }, [cityName] )

    return (
        <div className="h-screen md:h-full w-full bg-black md:pt-3">
            <h2 className="h-[8%] text-2xl text-white text-center md:text-start p-2 md:p-0">Today&apos;s Highlights</h2>

            <div className="h-[92%] w-full md:pt-2">
                <div className="w-full h-full grid grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-3 pb-6 md:pb-0 px-6 md:px-0">
                    {/* Wind status */}
                    <div className="h-full md:h-full w-full flex flex-col items-center justify-between p-4 bg-[#1e213a] text-[#e7e7eb] overflow-y-auto">
                        <h3 className="text-medium text-base text-center text-[#e7e7eb]">Wind status</h3>

                        <div className="flex">
                            <p className="text-5xl font-bold">{currentCityWeather?.wind?.speed}</p>
                            <p className="text-4xl ml-1 font-light">ms</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 bg-gray-600 rounded-full">
                                <Image
                                    src={navigation}
                                    alt="imagen"
                                    className="p-1"
                                    style={{ transform: `rotate(${currentCityWeather?.wind?.deg}deg)` }}
                                />
                            </div>

                            <span>NE</span>
                        </div>
                    </div>

                    {/* Humidity */}
                    <div className="h-full md:h-full w-full flex flex-col items-center justify-between p-4 bg-[#1e213a] text-[#e7e7eb] overflow-y-auto">
                        <h3 className="text-medium text-base text-center text-[#e7e7eb]">Humidity</h3>

                        <div className="flex">
                            <p className="text-6xl font-bold">{currentCityWeather?.main?.humidity}</p>
                            <p className="text-4xl ml-1 font-light">%</p>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full px-8">
                            <div className="w-full flex justify-between">
                                <span className="text-xs font-light">0</span>
                                <span className="text-xs font-light">50</span>
                                <span className="text-xs font-light">100</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${currentCityWeather?.main?.humidity}%` }}></div>
                            </div>
                            <div className="w-full flex justify-end">
                                <span className="text-xs font-light">%</span>
                            </div>
                        </div>
                    </div>

                    {/* Visibility */}
                    <div className="h-full md:h-full w-full flex flex-col items-center p-4 bg-[#1e213a] text-[#e7e7eb] overflow-y-auto">
                        <h3 className="text-medium text-base text-center text-[#e7e7eb]">Visibility</h3>

                        <div className="flex items-center pt-3">
                            <p className="text-6xl font-bold">{currentCityWeather?.visibility ? (currentCityWeather.visibility/1000).toFixed(2) : 0}</p>
                            <p className="text-4xl ml-1 font-light">km</p>
                        </div>
                    </div>

                    {/* Air Pressure */}
                    <div className="h-full md:h-full w-full flex flex-col items-center p-4 bg-[#1e213a] text-[#e7e7eb] overflow-y-auto">
                        <h3 className="text-medium text-base text-center text-[#e7e7eb]">Air Pressure</h3>

                        <div className="flex items-center pt-3">
                            <p className="text-6xl font-bold">{currentCityWeather?.main?.pressure}</p>
                            <p className="text-4xl ml-1 font-light">mb</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
