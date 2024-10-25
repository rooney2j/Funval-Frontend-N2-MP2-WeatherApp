'use client'

import Image from "next/image";
import location from "@/public/images/location.svg"
import location_on from "@/public/images/location_on.svg"
import navigation from "@/public/images/navigation.svg"
import Drawer from "@/components/Drawer";
import { useState } from "react";

export default function Home() {

  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className="h-lvh w-screen bg-black">

      {/* Grid (horizontal) */}
      <div className="h-full w-full grid md:grid-cols-[30%_70%]">
        {/* Grid-item 1: Geolocalization */}
        <div className="w-full h-screen flex flex-col items-center justify-between bg-[#1e213a] relative">
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

            <div className="h-8 w-8 bg-gray-600 rounded-full">
              <Image
                src={location}
                alt="imagen"
                className="p-1"
              />
            </div>
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
              src="/images/04n.png"
              width={500}
              height={500}
              alt="Una nube solita"
              className="w-40 h-40 object-contain absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
            />
          </div>

          {/* Temperature */}
          <div className="flex items-center gap-1 my-4">
            <h2 className="text-[#e7e7eb] text-9xl font-medium">14</h2>
            <h3 className="text-[#a09fb1] text-7xl">°C</h3>
          </div>

          <h2 className="text-[#a09fb1] capitalize text-4xl">Overcast clouds</h2>

          {/* Date */}
          <p className="my-4 text-md text-[#88869D] font-medium mb-6">
            Today &nbsp;&nbsp; . &nbsp;&nbsp; Wed, 23 Oct
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 mb-14">
            <div className="h-5 w-5">
              <Image
                src={location_on}
                alt="imagen"
              />
            </div>

            <span className="text-[#a09fb1] text-xs">Arequipa</span>
          </div>
        </div>
        {/* End of Grid 1: Geolocalization */}

        {/* Grid-item 2: Temperature next 5 days and Today's Highlights (Grid vertical) */}
        <div className="md:h-screen w-full grid md:grid-rows-[35%_65%] md:px-12 lg:px-24">
          
          {/* Subgrid item 1: Temperature next 5 days */}
          <div className="w-full h-screen md:h-full bg-black">
            {/* °C and °F options */}
            <div className="w-full h-[10%] md:h-[15%] py-3 md:py-0 md:pr-8 flex items-end justify-center md:justify-end gap-4">
              <button className="w-10 h-10 md:w-8 md:h-full bg-slate-200 font-medium p-2 md:p-1 rounded-full">
                <span className="text-base">°C</span>
              </button>

              <button className="w-10 h-10 md:w-8 md:h-full bg-slate-400 font-medium p-2 md:p-1 rounded-full">
                <span className="text-base text-white">°F</span>
              </button>
            </div>

            {/* Cards */}
            <div className="h-[90%] md:h-[85%] w-full p-3 md:p-0">
              <div className="h-full w-full p-3 md:p-0 grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-2">
                {/* Card 1 */}
                <div className="w-full h-[200px] md:h-full bg-[#1e213a] p-6 text-white flex flex-col justify-between items-center">
                  <h3 className="text-base text-center">Tomorrow</h3>

                  <Image
                    src="/images/04n.png"
                    width={500}
                    height={500}
                    alt="Una nube solita"
                    className="w-24 h-24 object-contain"
                  />

                  <div className=" flex gap-2 mt-2">
                    <p>21°C</p>
                    <p className="text-[#A09FB1]">11°C</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="w-full h-[200px] bg-[#1e213a] p-6 text-white flex flex-col justify-between items-center">
                  <h3 className="text-base text-center">Fri, 25 Oct</h3>

                  <Image
                    src="/images/01d.png"
                    width={500}
                    height={500}
                    alt="Sol"
                    className="w-24 h-24 object-contain"
                  />

                  <div className=" flex gap-2 mt-2">
                    <p>22°C</p>
                    <p className="text-[#A09FB1]">13°C</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="w-full h-[200px] bg-[#1e213a] p-6 text-white flex flex-col justify-between items-center">
                  <h3 className="text-base text-center">Sat, 26 Oct</h3>

                  <Image
                    src="/images/04n.png"
                    width={500}
                    height={500}
                    alt="Una nube solita"
                    className="w-24 h-24 object-contain"
                  />

                  <div className=" flex gap-2 mt-2">
                    <p>23°C</p>
                    <p className="text-[#A09FB1]">11°C</p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="w-full h-[200px] bg-[#1e213a] p-6 text-white flex flex-col justify-between items-center">
                  <h3 className="text-base text-center">Sun, 27 Oct</h3>

                  <Image
                    src="/images/04n.png"
                    width={500}
                    height={500}
                    alt="Una nube solita"
                    className="w-24 h-24 object-contain"
                  />

                  <div className=" flex gap-2 mt-2">
                    <p>23°C</p>
                    <p className="text-[#A09FB1]">13°C</p>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="w-full h-[200px] bg-[#1e213a] p-6 text-white flex flex-col justify-between items-center">
                  <h3 className="text-base text-center">Mon, 28 Oct</h3>

                  <Image
                    src="/images/04n.png"
                    width={500}
                    height={500}
                    alt="Una nube solita"
                    className="w-24 h-24 object-contain"
                  />

                  <div className=" flex gap-2 mt-2">
                    <p>23°C</p>
                    <p className="text-[#A09FB1]">14°C</p>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Cards */}
          </div>

          {/* Subgrid item 2: Today's Highlights */}
          <div className="h-screen md:h-full w-full bg-black md:pt-5">
            <h2 className="text-2xl text-white text-center md:text-start p-2 md:p-0">Today&apos;s Highlights</h2>

            <div className="h-[92%] w-full">
              <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-3 px-6 md:px-0">
                {/* Wind status */}
                <div className="h-[160px] md:h-full w-full flex flex-col items-center justify-between p-4 bg-[#1e213a] text-[#e7e7eb]">
                  <h3 className="text-medium text-base text-center text-[#e7e7eb]">Wind status</h3>

                  <div className="flex">
                    <p className="text-5xl font-bold">2.57</p>
                    <p className="text-4xl ml-1 font-light">ms</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-gray-600 rounded-full">
                      <Image
                        src={navigation}
                        alt="imagen"
                        className="p-1 rotate-[62deg]"
                      />
                    </div>

                    <span>NE</span>
                  </div>
                </div>

                {/* Humidity */}
                <div className="h-[160px] md:h-full w-full flex flex-col items-center justify-between p-4 bg-[#1e213a] text-[#e7e7eb]">
                  <h3 className="text-medium text-base text-center text-[#e7e7eb]">Humidity</h3>

                  <div className="flex">
                    <p className="text-6xl font-bold">35</p>
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
                      <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                    <div className="w-full flex justify-end">
                      <span className="text-xs font-light">%</span>
                    </div>
                  </div>
                </div>

                {/* Visibility */}
                <div className="h-[150px] md:h-full w-full flex flex-col items-center p-4 bg-[#1e213a] text-[#e7e7eb]">
                  <h3 className="text-medium text-base text-center text-[#e7e7eb]">Visibility</h3>

                  <div className="flex items-center pt-3">
                    <p className="text-6xl font-bold">10.00</p>
                    <p className="text-4xl ml-1 font-light">km</p>
                  </div>
                </div>

                {/* Air Pressure */}
                <div className="h-[150px] md:h-full w-full flex flex-col items-center p-4 bg-[#1e213a] text-[#e7e7eb]">
                  <h3 className="text-medium text-base text-center text-[#e7e7eb]">Air Pressure</h3>

                  <div className="flex items-center pt-3">
                    <p className="text-6xl font-bold">1019</p>
                    <p className="text-4xl ml-1 font-light">mb</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Grid-item 2 */}
      </div>
      {/* End of Grid */}
    </div>
  );
}
