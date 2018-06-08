const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  
  
// START OF ALL COMMANDS
      
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
  
  
  // CLOSE OF CLIENT.ON  
});

  
client.login(process.env.BOT_TOKEN);
