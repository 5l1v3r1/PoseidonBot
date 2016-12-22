'use strict';

const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

const CONFIG_FILE_NAME = 'config.json';

let config = JSON.parse(fs.readFileSync(CONFIG_FILE_NAME));

let token = config.token;

let bot = new TelegramBot(token, {
  polling: true
});

bot.on('message', (msg) => {
  let chatId = msg.chat.id;
  bot.sendMessage(chatId, `You said '${msg.text}'`);
});
