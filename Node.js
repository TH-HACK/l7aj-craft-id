const TelegramBot = require('node-telegram-bot-api');

// توكن البوت
const token = '7361470544:AAEitqyfPIq2BFP33Hq38D6J3MxYxV40Q2I';
const bot = new TelegramBot(token, { polling: true });

// أمر البداية
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "مرحبًا! البوت يعمل الآن على Vercel.");
});

// أمر بسيط لرد البيانات
bot.onText(/\/ping/, (msg) => {
  bot.sendMessage(msg.chat.id, "Pong! البوت متصل.");
});
