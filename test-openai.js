#!/usr/bin/env node

const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function testOpenAI() {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: 'Hello, OpenAI!',
      max_tokens: 5,
    });
    console.log('API接続成功:', response.data.choices[0].text.trim());
  } catch (error) {
    console.error('API接続エラー:', error);
  }
}

testOpenAI();