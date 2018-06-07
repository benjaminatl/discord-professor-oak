const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if(message.content == 'Hey') {
        message.channel.sendMessage('Hello, Trainer');
    }
});

client.login(process.env.BOT_TOKEN);
