const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "Hi")) {
    message.channel.send("Hello, Trainer!");
  } else
  if (message.content.startsWith(config.prefix + "Help")) {
    message.channel.send("Hello Trainer, what did you need help with?");
  }
});

client.login(process.env.BOT_TOKEN);
