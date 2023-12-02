import { TextServiceClient } from '@google-ai/generativelanguage';
import { GoogleAuth } from 'google-auth-library';

const MODEL_NAME = 'models/text-bison-001';
const API_KEY =
  process.env.NEXT_PUBLIC_GL_API_KEY ||
  'AIzaSyCSivkPo6TfetEkZBkj_OK0sukGZdJucTg';

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

export default async function handler(req, res) {
  console.log(req.body, 'req.body');

  if (!req.body.tag) {
    throw new Error('Missing required field: text');
  }

  let hashtag = req.body.tag;

  let userPrompt = `Write minimum 30 hashtags based on the hashtag "#${hashtag}" for Instagram. give the response in string format in 1 line`;

  console.log(userPrompt, 'userPrompt');

  if (!userPrompt) {
    throw new Error('Someting went wrong please try again after sometime');
  }

  if (userPrompt) {
    try {
      const result = await client.generateText({
        model: MODEL_NAME,
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
  }
}
