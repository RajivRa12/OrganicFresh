
'use server';
/**
 * @fileOverview A flow for getting market prices for agricultural commodities.
 *
 * - getMarketPrices - A function that returns market prices for a given location.
 * - MarketPriceInput - The input type for the getMarketPrices function.
 * - MarketPriceOutput - The return type for the getMarketPrices function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { findMarketData } from '@/ai/tools/market-data';

const MarketPriceInputSchema = z.object({
  location: z.string().describe('The city or district to get market prices for.'),
});
export type MarketPriceInput = z.infer<typeof MarketPriceInputSchema>;

export const MarketPriceSchema = z.object({
    commodity: z.string().describe('The name of the agricultural commodity.'),
    variety: z.string().describe('The variety of the commodity.'),
    modalPrice: z.number().describe('The most common price for the commodity in the market, per quintal (100kg).'),
});
export type MarketPrice = z.infer<typeof MarketPriceSchema>;

const MarketPriceOutputSchema = z.object({
  prices: z.array(MarketPriceSchema),
});
export type MarketPriceOutput = z.infer<typeof MarketPriceOutputSchema>;

export async function getMarketPrices(input: MarketPriceInput): Promise<MarketPriceOutput> {
  return marketPriceFlow(input);
}

const marketPriceFlow = ai.defineFlow(
  {
    name: 'marketPriceFlow',
    inputSchema: MarketPriceInputSchema,
    outputSchema: MarketPriceOutputSchema,
  },
  async (input) => {
    const llmResponse = await ai.generate({
      prompt: `You are an agriculture market data assistant. A user wants to know the APMC market prices for major crops in their location. Use the provided tool to find the market data. If no data is found for the exact location, try a nearby major city. Present the data clearly. Location: ${input.location}`,
      tools: [findMarketData],
      model: 'googleai/gemini-2.0-flash',
    });

    const toolResponse = llmResponse.toolRequest?.output;

    if (toolResponse) {
        return { prices: toolResponse as MarketPrice[] };
    }
    
    // This is a fallback if the tool doesn't respond as expected.
    // We can try to parse the text response.
    const textResponse = llmResponse.text;
    console.log("LLM Text response:", textResponse);
    // In a real app, you would have more robust parsing here.
    // For now, we'll return an empty array if the tool fails.
    return { prices: [] };
  }
);
