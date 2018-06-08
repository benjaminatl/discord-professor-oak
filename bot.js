const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  
  
// START OF ALL COMMANDS
  
  // HELP
  if (message.content.startsWith(prefix + "help")) {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Help Commands",
    description: "Hello Trainer, Below is a list of commands I have learned through my research. To execute any command, type the below commands in bold exactly how they appear.",
    fields: [{
        name: "oak help",
        value: "Displays this message."
      },
      
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Professor Oak, Carrollton GA"
    }
  }
});
  }
  
  
  
   // ALOLAN
  if (message.content.startsWith(prefix + "alolan")) {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Alolan Kanto Pokemon",
    description: "Hello Trainer! According to my research, the following Pokemon are from the Alolan Kanto region.",
    fields: [{
        name: "Rattata",
      },
      {
        name: "Raticate",
      },
      
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Professor Oak, Carrollton GA"
    }
  }
});
  }
  
  
  // CLOSE OF CLIENT.ON  
});

  
client.login(process.env.BOT_TOKEN);
