const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

bot.on('message', (message) => {
    if(message.content == 'Hey') {
        message.channel.sendMessage('Hello, Trainer');
    }
});

bot.login(process.env.BOT_TOKEN);
