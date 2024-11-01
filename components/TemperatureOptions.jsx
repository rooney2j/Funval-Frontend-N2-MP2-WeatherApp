function convertirFahrenheitACelsius(temperatura_en_fahrenheit) {
    let F = temperatura_en_fahrenheit;
    let C = ((F - 32) / 9) * 5;

    return C.toFixed(0);
}

function convertirCelsiusAFahrenheit(temperatura_en_celsius) {
    let C = temperatura_en_celsius;
    let F = ((9 * C) / 5) + 32

    return F.toFixed(0);
}

export default function TemperatureOptions() {
    return (
        <div className="w-full h-[10%] md:h-[20%] py-3 md:py-0 md:pr-1 flex items-end justify-center md:justify-end gap-4">
            <div className="w-10 h-10 md:w-11 md:h-11">
                <button className="w-full h-full bg-slate-200 font-medium p-2 md:p-1 rounded-full">
                    <span className="text-xl font-bold">°C</span>
                </button>
            </div>

            <div className="w-10 h-10 md:w-11 md:h-11">
                <button className="w-full h-full bg-slate-400 font-medium p-2 md:p-1 rounded-full">
                    <span className="text-xl text-white font-bold">°F</span>
                </button>
            </div>
        </div>
    )
}
