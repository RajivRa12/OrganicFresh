
'use server';
import { ai } from '@/ai/genkit';
import { MarketPriceSchema } from '../flows/market-flow';
import { z } from 'zod';

const mockMarketData: { [key: string]: z.infer<typeof MarketPriceSchema>[] } = {
  kolar: [
    { commodity: 'Tomato', variety: 'Local', modalPrice: 2500 },
    { commodity: 'Potato', variety: 'Jyoti', modalPrice: 1800 },
    { commodity: 'Onion', variety: 'Red', modalPrice: 2200 },
    { commodity: 'Chilli', variety: 'Green', modalPrice: 4500 },
  ],
  bengaluru: [
    { commodity: 'Tomato', variety: 'Hybrid', modalPrice: 2800 },
    { commodity: 'Carrot', variety: 'Ooty', modalPrice: 3500 },
    { commodity: 'Beans', variety: 'Local', modalPrice: 4000 },
    { commodity: 'Cabbage', variety: 'Local', modalPrice: 1500 },
  ],
};


export const findMarketData = ai.defineTool(
    {
        name: 'findMarketData',
        description: 'Finds APMC market data for agricultural commodities in a given location in India.',
        inputSchema: z.object({
            location: z.string().describe('The city or district name, e.g., Kolar'),
        }),
        outputSchema: z.array(MarketPriceSchema),
    },
    async (input) => {
        console.log(`Searching for market data in: ${input.location}`);
        const locationKey = input.location.toLowerCase().split(' ')[0];
        // In a real application, this would call an external API like data.gov.in
        // For this example, we'll use mock data.
        return mockMarketData[locationKey] || [];
    }
);
