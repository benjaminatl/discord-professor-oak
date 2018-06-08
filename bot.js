const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  
  
// START OF ALL COMMANDS
  
  //help
  if (message.content.startsWith(prefix + "help")) {
    message.channel.send({embed: {
    color: 3447003,
    description: "A very simple Embed!"
  }});
  }
  
  
  // CLOSE OF CLIENT.ON  
});

  
client.login(process.env.BOT_TOKEN);
