
'use server';
import { ai } from '@/ai/genkit';
import { WeatherForecastSchema } from '../flows/weather-flow';
import { z } from 'zod';

const mockWeatherData: { [key: string]: z.infer<typeof WeatherForecastSchema> } = {
  kolar: {
    location: 'Kolar, Karnataka',
    temperature: 28,
    description: 'Partly cloudy with a chance of afternoon showers.',
    humidity: 65,
    windSpeed: 12,
  },
  bengaluru: {
    location: 'Bengaluru, Karnataka',
    temperature: 26,
    description: 'Cloudy with light rain.',
    humidity: 75,
    windSpeed: 15,
  },
};

export const getWeatherData = ai.defineTool(
  {
    name: 'getWeatherData',
    description: 'Gets the current weather forecast for a specified location.',
    inputSchema: z.object({
        location: z.string().describe('The city or district name, e.g., Kolar'),
    }),
    outputSchema: WeatherForecastSchema,
  },
  async (input) => {
    console.log(`Getting weather for: ${input.location}`);
    const locationKey = input.location.toLowerCase().split(' ')[0];
    // In a real application, this would call an external weather API.
    // For this example, we'll use mock data.
    return mockWeatherData[locationKey] || {
        location: input.location,
        temperature: 25,
        description: 'Sunny.',
        humidity: 50,
        windSpeed: 10,
    };
  }
);
