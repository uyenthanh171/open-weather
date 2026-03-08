import { test as base } from '@playwright/test';
import { WeatherService } from '../services/weatherService'; 

type MyFixtures = {
    weatherService: WeatherService
};

export const test = base.extend<MyFixtures>({
    weatherService: async ({ request }, use) => {
        const weatherService = new WeatherService(request);
        await use(weatherService);
    },
});

export { expect } from '@playwright/test';