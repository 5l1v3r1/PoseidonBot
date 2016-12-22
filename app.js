'use strict';

const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

const CONFIG_FILE_NAME = 'config.json';
const config = JSON.parse(fs.readFileSync(CONFIG_FILE_NAME));

const WAVE = '🌊';
const ROW_LENGTH = 22;

let token = config.token;

let bot = new TelegramBot(token, {
  polling: true
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
