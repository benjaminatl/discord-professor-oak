const Discord = require("discord.js");
const client = new Discord.Client();

// Set the prefix
let prefix = "!";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "hi")) {
    message.channel.send("Hello, Trainer!");
  } else
  if (message.content.startsWith(prefix + "help")) {
    message.channel.send("Hello Trainer, what can I help you with?");
  }
});

client.login(process.env.BOT_TOKEN);
