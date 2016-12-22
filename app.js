'use strict';

const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

const CONFIG_FILE_NAME = 'config.json';

let config = JSON.parse(fs.readFileSync(CONFIG_FILE_NAME));

let token = config.token || process.env.TOKEN;

let bot = new TelegramBot(token, {
  polling: true
});

const wave = '🌊';
let flood = '';
for (let x = 0; x < 1000; x++)
  flood += wave;

bot.on('message', (msg) => {
  let chatId = msg.chat.id;
  let msgText = msg.text;
  let split = msg.text.split(' ');
  if (split[0] === '/flood')
    bot.sendMessage(chatId, flood);
});
