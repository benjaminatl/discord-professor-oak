exports.run = (client, message, args) => {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    description: "Hello Trainer, Below is a list of commands I have learned through my research. To execute any command, type the below commands in bold exactly how they appear.",
    fields: [{
        name: "!oak help",
        value: "Will display this message *(list of commands)*."
      },
      
             
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Professor Oak, Made By MrRecordHolder"
    }
  }
});
}
