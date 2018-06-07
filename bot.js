const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

bot.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
​
  if (message.content.startsWith(config.prefix + "Hey")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(config.prefix + "Hey, Trainer!")) {
    message.channel.send("bar!");
  }
});

bot.login(process.env.BOT_TOKEN);
