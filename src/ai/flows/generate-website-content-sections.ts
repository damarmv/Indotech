'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating various website content sections
 * based on a business description, including hero section copy, 'About Us' text,
 * service advantages, and call-to-action messages.
 *
 * - generateWebsiteContentSections - A function that handles the generation process.
 * - GenerateWebsiteContentSectionsInput - The input type for the generateWebsiteContentSections function.
 * - GenerateWebsiteContentSectionsOutput - The return type for the generateWebsiteContentSections function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateWebsiteContentSectionsInputSchema = z.object({
  businessDescription: z
    .string()
    .describe(
      'A detailed description of the business, its services, and target audience.'
    ),
  additionalInstructions: z
    .string()
    .optional()
    .describe(
      'Any specific instructions or preferences for content generation (e.g., tone of voice, keywords).'
    ),
});
export type GenerateWebsiteContentSectionsInput = z.infer<
  typeof GenerateWebsiteContentSectionsInputSchema
>;

const GenerateWebsiteContentSectionsOutputSchema = z.object({
  heroSection: z
    .object({
      title: z
        .string()
        .describe('A captivating and attention-grabbing main title for the hero section.'),
      subtitle: z
        .string()
        .describe(
          'A concise explanation of the services offered, complementing the main title.'
        ),
    })
    .describe('Content for the website\'s hero section.'),
  aboutUs: z
    .string()
    .describe(
      'A detailed profile of the company, including its mission, vision, and core services.'
    ),
  serviceAdvantages: z
    .array(z.string())
    .describe(
      'A list of key advantages or unique selling propositions of the business.'
    ),
  callToAction: z
    .object({
      mainText: z
        .string()
        .describe('A compelling and persuasive call to action text to encourage booking.'),
      buttonText: z
        .string()
        .describe(
          'The text for the call to action button, e.g., "Pesan Sekarang" or "Hubungi Kami".'
        ),
    })
    .describe('Content for a prominent call to action section.'),
});
export type GenerateWebsiteContentSectionsOutput = z.infer<
  typeof GenerateWebsiteContentSectionsOutputSchema
>;

export async function generateWebsiteContentSections(
  input: GenerateWebsiteContentSectionsInput
): Promise<GenerateWebsiteContentSectionsOutput> {
  return generateWebsiteContentSectionsFlow(input);
}

const generateWebsiteContentSectionsPrompt = ai.definePrompt({
  name: 'generateWebsiteContentSectionsPrompt',
  input: { schema: GenerateWebsiteContentSectionsInputSchema },
  output: { schema: GenerateWebsiteContentSectionsOutputSchema },
  prompt: `You are an expert marketing copywriter specializing in creating professional and engaging website content for service-based businesses.
Your task is to generate compelling copy for a company profile website based on the provided business description.

Here is the business description:
{{{businessDescription}}}

{{#if additionalInstructions}}
Additional instructions:
{{{additionalInstructions}}}
{{/if}}

Please generate the following sections for the website:

1.  **Hero Section:**
    *   A captivating and attention-grabbing main title.
    *   A concise explanation of the services offered, complementing the main title.

2.  **About Us:**
    *   A detailed profile of the company, including its mission, vision, and core services, highlighting its strengths and values.

3.  **Service Advantages:**
    *   A list of bullet points (each as a separate string in an array) describing the key advantages or unique selling propositions of the business. Make these concise and impactful.

4.  **Call To Action:**
    *   A compelling and persuasive main text to encourage customers to book services now.
    *   The text for a prominent call to action button, such as "Pesan Sekarang" or "Hubungi Kami".

Ensure the generated content is professional, engaging, concise, and persuasive. Focus on clarity and impact.`,
});

const generateWebsiteContentSectionsFlow = ai.defineFlow(
  {
    name: 'generateWebsiteContentSectionsFlow',
    inputSchema: GenerateWebsiteContentSectionsInputSchema,
    outputSchema: GenerateWebsiteContentSectionsOutputSchema,
  },
  async (input) => {
    const { output } = await generateWebsiteContentSectionsPrompt(input);
    return output!;
  }
);
