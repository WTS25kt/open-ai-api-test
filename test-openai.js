#!/usr/bin/env node

import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function testOpenAI() {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // 新しいモデルに変更
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'Hello, OpenAI!' }
      ],
      max_tokens: 5,
    });
    console.log('API接続成功:', response); // レスポンス全体をログに出力
    console.log('API接続成功:', response.choices[0].message.content.trim());
  } catch (error) {
    console.error('API接続エラー:', error);
  }
}

testOpenAI();