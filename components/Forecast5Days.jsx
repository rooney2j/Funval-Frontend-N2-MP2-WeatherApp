'use client'

import Image from "next/image"

import axios from "axios";

import { API_KEY } from "@/utils/key";
import { useState, useEffect } from "react";
import dayjs from "dayjs";

const fetchDataOfFiveDays = async (city = 'Buenos Aires') => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);

    return data;
}

export default function Forecast5Days(props) {
    const fecha_de_hoy = dayjs()
    const manana = fecha_de_hoy.add(1, 'day');
    const pasado_manana = fecha_de_hoy.add(2, 'day');
    const dentro_de_3_dias = fecha_de_hoy.add(3, 'day');
    const dentro_de_4_dias = fecha_de_hoy.add(4, 'day');
    const dentro_de_5_dias = fecha_de_hoy.add(5, 'day');

    const [currentCity, setCurrentCity] = useState('Arequipa')

    const [weatherToday, setWeatherToday] = useState({});
    const [weatherTomorrow, setWeatherTomorrow] = useState({});
    const [weatherIn2Days, setWeatherIn2Days] = useState({});
    const [weatherIn3Days, setWeatherIn3Days] = useState({});
    const [weatherIn4Days, setWeatherIn4Days] = useState({});
    const [weatherIn5Days, setWeatherIn5Days] = useState({});

    useEffect(() => {
        fetchDataOfFiveDays(currentCity)
            .then((data) => {
                const weather_list = data.list;

                // Devuelve el objeto completo si coincide con la fecha de mañana
                const objeto_manana = weather_list.find((objeto) => {
                    const objeto_fecha = dayjs(objeto.dt_txt)

                    return manana.date() === objeto_fecha.date() && manana.month() === objeto_fecha.month() && manana.year() === objeto_fecha.year()
                })

                // Devuelve el objeto completo si coincide con la fecha de pasado mañana
                const objeto_pasado_manana = weather_list.find((objeto) => {
                    const objeto_fecha = dayjs(objeto.dt_txt)

                    return pasado_manana.date() === objeto_fecha.date() && pasado_manana.month() === objeto_fecha.month() && pasado_manana.year() === objeto_fecha.year()
                })

                // Devuelve el objeto completo si coincide con la fecha dentro de 3 días
                const objeto_dentro_de_3_dias = weather_list.find((objeto) => {
                    const objeto_fecha = dayjs(objeto.dt_txt)

                    return dentro_de_3_dias.date() === objeto_fecha.date() && dentro_de_3_dias.month() === objeto_fecha.month() && dentro_de_3_dias.year() === objeto_fecha.year()
                })

                // Devuelve el objeto completo si coincide con la fecha dentro de 4 días
                const objeto_dentro_de_4_dias = weather_list.find((objeto) => {
                    const objeto_fecha = dayjs(objeto.dt_txt)

                    return dentro_de_4_dias.date() === objeto_fecha.date() && dentro_de_4_dias.month() === objeto_fecha.month() && dentro_de_4_dias.year() === objeto_fecha.year()
                })

                // Devuelve el objeto completo si coincide con la fecha dentro de 4 días
                const objeto_dentro_de_5_dias = weather_list.find((objeto) => {
                    const objeto_fecha = dayjs(objeto.dt_txt)

                    return dentro_de_5_dias.date() === objeto_fecha.date() && dentro_de_5_dias.month() === objeto_fecha.month() && dentro_de_5_dias.year() === objeto_fecha.year()
                })

                // Validamos que los datos hayan sido entregados
                if (objeto_manana && objeto_pasado_manana && objeto_dentro_de_3_dias && objeto_dentro_de_4_dias && objeto_dentro_de_5_dias) {
                    setWeatherTomorrow(objeto_manana);
                    setWeatherIn2Days(objeto_pasado_manana);
                    setWeatherIn3Days(objeto_dentro_de_3_dias);
                    setWeatherIn4Days(objeto_dentro_de_4_dias);
                    setWeatherIn5Days(objeto_dentro_de_5_dias);
                }
            })
    }, [])

    return (
        <div className="h-[90%] md:h-[80%] w-full p-3 md:px-0 md:py-2">
            <div className="h-full w-full p-3 md:p-0 grid grid-cols-2 grid-rows-3 md:grid-cols-5 md:grid-rows-1 gap-5 md:gap-3">
                {/* Card 1 */}
                <div className="w-full h-full bg-[#1e213a] p-6 md:p-4 text-white flex flex-col justify-between items-center overflow-y-auto overflow-x-hidden">
                    <h3 className="text-base text-center">Tomorrow</h3>

                    <div className="w-24 h-24 md:w-14 md:h-14">
                        <Image
                            src={weatherTomorrow.weather ? `/images/${weatherTomorrow.weather[0].icon}.png` : '/images/04n.png'}
                            width={500}
                            height={500}
                            alt="Icono"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className=" flex gap-2 mt-2">
                        {/* <p>{`${convertirFahrenheitACelsius(weatherTomorrow?.main?.temp_max)}`}°C</p> */}
                        <p>{weatherTomorrow?.main?.temp_max.toFixed(0)}°C</p>
                        <p className="text-[#A09FB1]">{weatherTomorrow?.main?.temp_min.toFixed(0)}°C</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="w-full h-full bg-[#1e213a] p-6 md:p-4 text-white flex flex-col justify-between items-center overflow-y-auto overflow-x-hidden">
                    <h3 className="text-base text-center">{pasado_manana.format('ddd, D MMM')}</h3>

                    <div className="w-24 h-24 md:w-14 md:h-14 flex items-center justify-center">
                        <Image
                            src={weatherIn2Days.weather ? `/images/${weatherIn2Days.weather[0].icon}.png` : '/images/04n.png'}
                            width={500}
                            height={500}
                            alt="Sol"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className=" flex gap-2 mt-2">
                        <p>{weatherIn2Days?.main?.temp_max.toFixed(0)}°C</p>
                        <p className="text-[#A09FB1]">{weatherIn2Days?.main?.temp_min.toFixed(0)}°C</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="w-full h-full bg-[#1e213a] p-6 md:p-4 text-white flex flex-col justify-between items-center overflow-y-auto overflow-x-hidden">
                    <h3 className="text-base text-center">{dentro_de_3_dias.format('ddd, D MMM')}</h3>

                    <div className="w-24 h-24 md:w-14 md:h-14">
                        <Image
                            src={weatherIn3Days.weather ? `/images/${weatherIn3Days.weather[0].icon}.png` : '/images/04n.png'}
                            width={500}
                            height={500}
                            alt="Una nube solita"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className=" flex gap-2 mt-2">
                        <p>{weatherIn3Days?.main?.temp_max.toFixed(0)}°C</p>
                        <p className="text-[#A09FB1]">{weatherIn3Days?.main?.temp_min.toFixed(0)}°C</p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="w-full h-full bg-[#1e213a] p-6 md:p-4 text-white flex flex-col justify-between items-center overflow-y-auto overflow-x-hidden">
                    <h3 className="text-base text-center">{dentro_de_4_dias.format('ddd, D MMM')}</h3>

                    <div className="w-24 h-24 md:w-14 md:h-14">
                        <Image
                            src={weatherIn4Days.weather ? `/images/${weatherIn4Days.weather[0].icon}.png` : '/images/04n.png'}
                            width={500}
                            height={500}
                            alt="Una nube solita"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className=" flex gap-2 mt-2">
                        <p>{weatherIn4Days?.main?.temp_max.toFixed(0)}°C</p>
                        <p className="text-[#A09FB1]">{weatherIn4Days?.main?.temp_min.toFixed(0)}°C</p>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="w-full h-full bg-[#1e213a] p-6 md:p-4 text-white flex flex-col justify-between items-center overflow-y-auto overflow-x-hidden">
                    <h3 className="text-base text-center">{dentro_de_5_dias.format('ddd, D MMM')}</h3>

                    <div className="w-24 h-24 md:w-14 md:h-14">
                        <Image
                            src={weatherIn5Days.weather ? `/images/${weatherIn5Days.weather[0].icon}.png` : '/images/04n.png'}
                            width={500}
                            height={500}
                            alt="Una nube solita"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className=" flex gap-2 mt-2">
                        <p>{weatherIn5Days?.main?.temp_max.toFixed(0)}°C</p>
                        <p className="text-[#A09FB1]">{weatherIn5Days?.main?.temp_min.toFixed(0)}°C</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
