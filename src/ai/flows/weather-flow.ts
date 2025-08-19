
'use server';
/**
 * @fileOverview A flow for getting the weather forecast.
 *
 * - getWeather - A function that returns the weather for a given location.
 * - WeatherInput - The input type for the getWeather function.
 * - WeatherForecast - The return type for the getWeather function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { getWeatherData } from '@/ai/tools/weather-data';

const WeatherInputSchema = z.object({
  location: z.string().describe('The city or district to get the weather for.'),
});
export type WeatherInput = z.infer<typeof WeatherInputSchema>;

export const WeatherForecastSchema = z.object({
  location: z.string().describe('The location of the forecast.'),
  temperature: z.number().describe('The current temperature in Celsius.'),
  description: z.string().describe('A brief description of the weather conditions.'),
  humidity: z.number().describe('The humidity percentage.'),
  windSpeed: z.number().describe('The wind speed in km/h.'),
});
export type WeatherForecast = z.infer<typeof WeatherForecastSchema>;

export async function getWeather(input: WeatherInput): Promise<WeatherForecast> {
  return weatherFlow(input);
}

const weatherFlow = ai.defineFlow(
  {
    name: 'weatherFlow',
    inputSchema: WeatherInputSchema,
    outputSchema: WeatherForecastSchema,
  },
  async (input) => {
    const llmResponse = await ai.generate({
        prompt: `You are a weather assistant. A user wants to know the weather for their location to plan farming activities. Use the provided tool to get the weather data and return the key information. Location: ${input.location}`,
        tools: [getWeatherData],
        model: 'googleai/gemini-2.0-flash',
        output: {
            schema: WeatherForecastSchema,
        }
    });

    if (llmResponse.output) {
      return llmResponse.output;
    }

    // Fallback if structured output fails
    const toolResponse = llmResponse.toolRequest?.output as any;
    if (toolResponse) {
      return {
        location: toolResponse.location,
        temperature: toolResponse.temperature,
        description: toolResponse.description,
        humidity: toolResponse.humidity,
        windSpeed: toolResponse.windSpeed,
      };
    }
    
    throw new Error('Could not retrieve weather data.');
  }
);
