'use client'

import Image from "next/image"

import location from "@/public/images/location.svg"
import location_on from "@/public/images/location_on.svg"

import getGeolocation from "@/utils/getGeolocation";

import Drawer from "./Drawer"

import axios from "axios";
import dayjs from "dayjs";

import { useState, useEffect, useContext } from "react"

import { API_KEY } from "@/utils/key"
import { CityContext } from "@/context/CityContext";
import { IsFahrenheitContext } from "@/context/IsFahrenheitContext";

import { convertirCelsiusAFahrenheit } from "./TemperatureOptions";


const fetchDataOfACity = async (city = 'Buenos Aires') => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    return data;
}

const fetchCoordinates = async () => {
    const coordenadas = await getGeolocation();

    return coordenadas
}

const fetchDataOfOneLocation = async (latitud = 44.34, longitud = 10.99) => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${API_KEY}&units=metric`);

    return data;
}

export default function GeolocationPanel() {
    const fecha_de_hoy = dayjs()

    const [drawerOpen, setDrawerOpen] = useState(false);

    // Usando las variables del contexto para obtener y actualizar el nombre de la ciudad
    const { cityName, setCityName } = useContext(CityContext);

    // Usando las variables del contexto Fahrenheit para mostrar la temperatura
    const { isFahrenheit } = useContext(IsFahrenheitContext);

    const [currentCityWeather, setCurrentCityWeather] = useState({});

    useEffect(() => {
        fetchDataOfACity(cityName)
            .then((data) => {
                //console.log(data);
                setCurrentCityWeather(data);
            })
    }, [cityName])

    function handleClickGeolocation() {
        fetchCoordinates()
            .then((data) => {
                let mi_latitud = data.latitud;
                let mi_longitud = data.longitud;

                fetchDataOfOneLocation(mi_latitud, mi_longitud)
                    .then((data) => {
                        setCityName(data.name);
                    })
            });
    }

    return (
        <div className="w-full h-screen flex flex-col items-center justify-between bg-[#1e213a] relative overflow-y-auto">
            <Drawer
                drawerOpen={drawerOpen}
                setDrawerOpen={setDrawerOpen}
            />

            {/* Header */}
            <div className="w-full h-14 flex justify-between items-center pt-7 px-4">
                <button
                    className="bg-gray-400 text-white py-1 px-4 rounded-md"
                    onClick={() => setDrawerOpen(true)}
                >
                    Search for Places
                </button>

                <button
                    className="h-8 w-8 bg-gray-600 rounded-full"
                    onClick={handleClickGeolocation}
                >
                    <Image
                        src={location}
                        alt="imagen"
                        className="p-1"
                    />
                </button>
            </div>

            {/* Clouds */}
            <div className="w-full relative">
                <Image
                    src="/images/Cloud-background.png"
                    width={500}
                    height={500}
                    alt="Nubes"
                    className="opacity-20"
                />

                <Image
                    src={currentCityWeather.weather ? `/images/${currentCityWeather.weather[0].icon}.png` : '/images/04n.png'}
                    width={500}
                    height={500}
                    alt="Una nube solita"
                    className="w-40 h-40 object-contain absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                />
            </div>

            {/* Temperature */}
            <div className="flex items-center gap-1 my-4">
                <h2 className="text-[#e7e7eb] text-9xl font-medium">
                    {
                        isFahrenheit ? 
                            `${parseFloat(convertirCelsiusAFahrenheit(currentCityWeather?.main?.temp)).toFixed(0)}`
                         :
                            `${currentCityWeather?.main?.temp.toFixed(0)}`
                    }

                </h2>

                <h3 className="text-[#a09fb1] text-7xl">
                    {
                        isFahrenheit ? '°F' : '°C'
                    }
                </h3>
            </div>

            <h2 className="text-[#a09fb1] capitalize text-4xl text-center">{currentCityWeather.weather ? currentCityWeather.weather[0].description : 'None'}</h2>

            {/* Date */}
            <p className="my-4 text-md text-[#88869D] font-medium mb-6">
                Today &nbsp;&nbsp; . &nbsp;&nbsp; {fecha_de_hoy.format('ddd, D MMM')}
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 mb-14">
                <div className="h-5 w-5">
                    <Image
                        src={location_on}
                        alt="imagen"
                    />
                </div>

                <span className="text-[#a09fb1] text-xs">{cityName}</span>
            </div>
        </div>
    )
}
