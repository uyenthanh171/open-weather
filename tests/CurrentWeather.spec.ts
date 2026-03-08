import { test, expect } from '../fixtures/base-test';
import wData from '../data/weather.data.json';
import { WeatherService } from '../services/weatherService';

test.describe('Test API: Current Weather', () => {
  let response: any;
  test.beforeAll(async ({ request }) => {
    const weatherService = new WeatherService(request);
    response = await weatherService.currentWeather();
  });
  test('TC01 - Valid request', async ({ weatherService}) => {
    expect(response.payload.coord).toBeDefined();
    expect(response.payload.weather).toBeDefined();
    expect(response.payload.main.temp).toBeDefined();
    expect(response.payload.wind.speed).toBeDefined();
    expect(response.payload.name).toBeDefined();
  })
  test('TC02 - Schema Validation', async ({ weatherService }) => {
    expect(response.status).toBe(200)
    expect(response.payload.coord).toEqual(expect.any(Object));
    expect(response.payload.weather).toEqual(expect.any(Array));
    expect(response.payload.main.temp).toEqual(expect.any(Number));
    expect(response.payload.wind.speed).toEqual(expect.any(Number));
    expect(response.payload.name).toEqual(expect.any(String));
  })
  test('TC03 - Data validation', async ({ weatherService }) => {
    const request = wData.CurrentWeatherData
    expect(response.status).toBe(200);
    expect(response.payload.coord.lat).toBe(request.lat);
    expect(response.payload.coord.lon).toBe(request.lon)
  })
});
