'use server';
/**
 * @fileOverview An AI agent that generates engaging names, concise descriptions, and detailed feature lists for service packages.
 *
 * - generateServicePackageDescriptions - A function that handles the generation process.
 * - GenerateServicePackageDescriptionsInput - The input type for the generateServicePackageDescriptions function.
 * - GenerateServicePackageDescriptionsOutput - The return type for the generateServicePackageDescriptions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateServicePackageDescriptionsInputSchema = z.object({
  serviceType: z
    .string()
    .describe(
      'The main type of service the business offers (e.g., "Web Development", "Digital Marketing", "Home Cleaning").'
    ),
  packageIdea: z
    .string()
    .describe(
      'A brief idea or goal for the service package (e.g., "basic website for small businesses", "premium social media management", "deep cleaning service").'
    ),
});
export type GenerateServicePackageDescriptionsInput = z.infer<
  typeof GenerateServicePackageDescriptionsInputSchema
>;

const GenerateServicePackageDescriptionsOutputSchema = z.object({
  packageName: z
    .string()
    .describe('An engaging and professional name for the service package.'),
  description: z
    .string()
    .describe(
      'A concise, persuasive, and SEO-friendly marketing description for the service package, highlighting its benefits.'
    ),
  features: z
    .array(z.string())
    .describe('A detailed list of key features included in the service package.'),
});
export type GenerateServicePackageDescriptionsOutput = z.infer<
  typeof GenerateServicePackageDescriptionsOutputSchema
>;

export async function generateServicePackageDescriptions(
  input: GenerateServicePackageDescriptionsInput
): Promise<GenerateServicePackageDescriptionsOutput> {
  return generateServicePackageDescriptionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateServicePackageDescriptionsPrompt',
  input: {schema: GenerateServicePackageDescriptionsInputSchema},
  output: {schema: GenerateServicePackageDescriptionsOutputSchema},
  prompt: `You are an expert marketing copywriter specializing in creating compelling service package descriptions for professional service businesses. Your goal is to generate an engaging name, a concise and persuasive marketing description, and a detailed list of features for a service package.

The business offers services in: {{{serviceType}}}

The idea for this specific service package is: {{{packageIdea}}}

Please ensure the output is professional, clear, and highlights the value proposition. The description should be concise and persuasive, suitable for a website. The features list should be detailed and informative.`,
});

const generateServicePackageDescriptionsFlow = ai.defineFlow(
  {
    name: 'generateServicePackageDescriptionsFlow',
    inputSchema: GenerateServicePackageDescriptionsInputSchema,
    outputSchema: GenerateServicePackageDescriptionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
