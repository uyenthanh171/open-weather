export interface CurrentWeatherResponse {
    coord: {
        lon: number;
        lat: number;
    };
    weather: WeatherCondition[];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
        temp_min: number;
        temp_max: number;
        sea_level?: number;  
        grnd_level?: number; 
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
        gust?: number; // Optional: Chỉ xuất hiện khi có gió giật
    };
    clouds: {
        all: number; // Cloudiness, %
    };
    rain?: {
        '1h'?: number; // Precipitation, mm/h
    };
    snow?: {
        '1h'?: number; // Precipitation, mm/h
    };
    dt: number; // Time of data calculation, unix, UTC
    sys: {
        type?: number;
        id?: number;
        message?: string;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number; // Shift in seconds from UTC
    id: number;      // City ID
    name: string;    // City name
    cod: number;     // Internal parameter
}

export interface WeatherCondition {
    id: number;
    main: string;
    description: string;
    icon: string;
}