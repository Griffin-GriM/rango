var Bot = require('node-telegram-bot-api');

var TOKEN = 'TOKEN';
var bot = new Bot(TOKEN, { polling: true });

bot.onText(/\/?start/, function(msg) {
    bot.sendMessage(msg.chat.id, 'به من بگی ping می‌گم pong و بالعکس! :)');
});

bot.onText(/\/?ping/, function(msg) {
    bot.sendMessage(msg.chat.id, 'pong');
});

bot.onText(/\/?pong/, function(msg) {
    bot.sendMessage(msg.chat.id, 'ping');
});
