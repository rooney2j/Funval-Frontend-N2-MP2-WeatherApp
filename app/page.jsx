import Forecast5Days from "@/components/Forecast5Days";
import TodayHighlights from "@/components/TodayHighlights";
import GeolocationPanel from "@/components/GeolocationPanel";
import TemperatureOptions from "@/components/TemperatureOptions";
import { CityProvider } from "@/context/CityContext";
import { IsFahrenheitProvider } from "@/context/IsFahrenheitContext";

export default function Home() {
  return (
    <CityProvider>
      <IsFahrenheitProvider>
        <div className="h-lvh w-screen bg-black">
          {/* Grid (horizontal) */}
          <div className="h-full w-full grid md:grid-cols-[30%_70%]">
            {/* Grid-item 1: Geolocation Panel */}
            <GeolocationPanel />

            {/* Grid-item 2: Temperature next 5 days and Today's Highlights (Grid vertical) */}
            <div className="md:h-screen w-full grid md:grid-rows-[35%_65%] md:px-4 lg:px-24">

              {/* Subgrid item 1: Temperature next 5 days */}
              <div className="w-full h-screen md:h-full bg-black">
                {/* °C and °F options */}
                <TemperatureOptions />

                {/* Cards */}
                <Forecast5Days />
              </div>

              {/* Subgrid item 2: Today's Highlights */}
              <TodayHighlights />
            </div>
            {/* End of Grid-item 2 */}

          </div>
          {/* End of Grid */}
        </div>
      </IsFahrenheitProvider>
    </CityProvider>
  );
}
