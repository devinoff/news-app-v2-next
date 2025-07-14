import {weatherCodes} from "@/lib/weatherCodes";
import {WeatherData} from "@/types";
import {config} from "@/app/config";

export default async function WeatherWidget() {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?q=Riga&key=${config.weatherApiKey}`, { cache: 'no-store' });

        if (!response.ok) return null;

        const data: WeatherData = await response.json();

        const conditionCode = weatherCodes[String(data.current.condition.code)];
        const condition = data.current.is_day ? conditionCode?.day : conditionCode?.night;

        const fullConditionText = condition ? `${condition.emoji} ${condition.text}` : '';
        return (
            <div className='bg-primary/20 px-5 py-2 sm:rounded-md text-[15px] fixed top-0 sm:top-2 backdrop-blur-md border border-primary/40 flex sm:gap-10 w-full sm:w-fit justify-between sm:justify-center z-50'>
                <span className='text-left'>Šobrīd Rīgā: {data.current.temp_c}°C</span>
                <span className='text-right'>{fullConditionText}</span>
            </div>
        );
    } catch (error) {
        console.error('Weather widget error:', error);
        return null;
    }
}