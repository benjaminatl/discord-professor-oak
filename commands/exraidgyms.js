const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if(message.content == 'exraidgyms') {
        message.channel.sendMessage('Trainer, you could receive an Ex Raid pass from raiding at **East Carroll** and **Starbucks** in Carrollton.');
    }
});
