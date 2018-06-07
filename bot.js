const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "hey")) {
    message.channel.send("Hello, Trainer");
  } else
  if (message.content.startsWith(config.prefix + "help")) {
    message.channel.send("Hello Trainer, How can I help you?");
  }
});

client.login(process.env.BOT_TOKEN);
