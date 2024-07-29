#!/usr/bin/env node

import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// コマンドライン引数を取得
const userInput = process.argv.slice(2).join(' ');

if (!userInput) {
  console.error('エラー: 入力がありません。コマンドライン引数としてテキストを入力してください。');
  process.exit(1);
}

async function testOpenAI() {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // モデルをGPT-4o Miniに変更
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: userInput }
      ],
      max_tokens: 100, // 必要に応じてトークン数を調整
    });
    console.log('API接続成功:', response); // レスポンス全体をログに出力
    console.log('API接続成功:', response.choices[0].message.content.trim());
  } catch (error) {
    console.error('API接続エラー:', error);
  }
}

testOpenAI();