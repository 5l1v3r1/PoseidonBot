'use strict';

const TelegramBot = require('node-telegram-bot-api');

let token = process.env.TOKEN;

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
  if (!msgText)
    return;
  let split = msg.text.split(' ');
  if (split[0] === '/flood')
    bot.sendMessage(chatId, flood);
});
