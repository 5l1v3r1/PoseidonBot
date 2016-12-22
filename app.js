'use strict';

const TelegramBot = require('node-telegram-bot-api');

const WAVE = '🌊';
const ROW_LENGTH = 22;

let token = process.env.TOKEN;

if (!token) {
  console.error(`TOKEN does not exist in process.env`);
  process.exit();
}

let port = process.env.PORT || 8443;
let host = process.env.HOST;
let bot = new TelegramBot(token, {
  polling: true,
  webHook: {
    port: port,
    host: host
  }
});

let flood = '';
for (let x = 0; x < ROW_LENGTH * 50; x++)
  flood += WAVE;

bot.on('message', (msg) => {
  let chatId = msg.chat.id;
  let msgText = msg.text;
  if (!msgText)
    return;
  let split = msg.text.split(' ');
  let command = split[0];
  if (command === '/flood' || command === '/flood@PoseidonFloodBot')
    bot.sendMessage(chatId, flood);
});
