import { Configuration, OpenAIApi } from 'openai';
import { TextServiceClient } from '@google-ai/generativelanguage';
import { GoogleAuth } from 'google-auth-library';

import GenratePrompt from '@/components/GenratePrompt';

const MODEL_NAME = 'models/text-bison-001';
const API_KEY = process.env.NEXT_PUBLIC_GL_API_KEY;

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});

// new api added //

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (!req.body.prompt || !req.body.slug) {
    throw new Error('Missing required field: text');
  }

  let prompt = req.body.prompt;
  let slug = req.body.slug;

  function containsHashtag(url) {
    if (url.includes('hashtag')) {
      return true;
    } else {
      return false;
    }
  }

  const isHashtag = containsHashtag(slug);

  const userPrompt = GenratePrompt(prompt, slug);

  if (!userPrompt) {
    throw new Error('Someting went wrong please try again after sometime');
  }

  if (isHashtag) {
    try {
      const result = await client.generateText({
        model: MODEL_NAME,
        // ... (other options)
        prompt: {
          text: userPrompt,
        },
      });

      if (
        result &&
        result[0] &&
        result[0].candidates &&
        result[0].candidates[0]
      ) {
        const output = result[0].candidates[0].output;
        res.status(200).json({ result: output });
      } else {
        res.status(404).json({ error: 'No valid output found' });
      }
    } catch (error) {
      console.error('An error occurred:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    try {
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: userPrompt,
        temperature: 0.7,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      if (
        !response ||
        !response.data ||
        !response.data.choices ||
        !response.data.choices[0]
      ) {
        throw new Error('Invalid response from OpenAI');
      }

      res.status(200).json({ result: response.data.choices[0].text });
      // res.status(200).json({ result: userPrompt });
    } catch (error) {
      console.error(error);
      res.status(500).json({ result: error.message });
    }
  }
}
