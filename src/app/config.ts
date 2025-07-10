interface ConfigInterface {
    briefingApiUrl: string;
    weatherApiKey: string;
}


let briefingApiUrl: string = '';
if (process.env.BRIEFING_API_URL) {
    briefingApiUrl = process.env.BRIEFING_API_URL;
} else {
    throw new Error('no BRIEFING_API_URL set in .env');
}

let weatherApiKey: string = '';
if (process.env.WEATHER_API_KEY) {
    weatherApiKey = process.env.WEATHER_API_KEY;
} else {
    throw new Error('no WEATHER_API_KEY set in .env');
}

export const config: ConfigInterface = {
    briefingApiUrl,
    weatherApiKey
}