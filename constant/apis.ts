import CurrentWeatherRequest from "../types/WeatherRequest";
import { WConfig, baseURL } from "./common";

export const API_ENDPOINTS = {
    WEATHER: {
        CURRENTWEATHER: (currentWeatherRequest: CurrentWeatherRequest) => `${baseURL.WEATHER}/weather?lat=${currentWeatherRequest.lat}&lon=${currentWeatherRequest.lon}&appid=${WConfig.WeatherAPIKey}`,
    }
} as const; // "as const" giúp TypeScript hiểu đây là các giá trị không đổi (read-only)