# open-ai-api-test
 OpenAIのAPIに接続できるかどうかのテスト

 ## How　to Use
 - Webから入力した値で、gpt-4o-miniにリクエストを送る機能　index.html server.js
 1. **サーバーの起動**:
 ```sh
 node server.js
 ```
 2. **httpサーバーの起動**:
 ```sh
 http-server
 ```
 3. **ブラウザで、"http://localhost:8080" を開く**:
 4. **テキストエリアに文字を入力しEnterを2回押す**:

 - ターミナルから入力した値で、gpt-4o-miniにリクエストを送る機能　test-openai.js
 1. **ターミナルを開き、コマンドラインから文字を入力し、スクリプトを実行**:
  ```sh
 node test-openai.js "ここに文字を入力"
 ```