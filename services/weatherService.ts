import { API_ENDPOINTS } from '../constant/apis';
import { CurrentWeatherResponse } from '../types/WeatherResponse';
import { ApiWrapper } from '../utils/api-wrapper';
import wData from '../data/weather.data.json'
import { ApiResponse } from '../types/apiBaseType';

export class WeatherService extends ApiWrapper {
    async currentWeather(): Promise<ApiResponse<CurrentWeatherResponse>> {
        const currentWeatherData = wData.CurrentWeatherData;
        const response = await this.get<CurrentWeatherResponse>(API_ENDPOINTS.WEATHER.CURRENTWEATHER(currentWeatherData));
        return response;
    }
}