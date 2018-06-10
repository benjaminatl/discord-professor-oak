exports.run = (client, message, args) => {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Kanto Region, Alolan Forms",
    description: "Hello Trainer! I see that you are interested in knowing more about the Alolan form Pokemon orignally discovered from the Kanto region.",
    fields: [{
        name: "Rattata, Raticate",
      },
      {
        name: "Raichu",
      },
      {
        name: "Sandshre, Sandslash",
      },
      {
        name: "Vulpix, Ninetails",
      },
      {
        name: "Diglett, Dugtrio",
      },
      {
        name: "Meowth, Persian",
      },
      {
        name: "Geodude, Graveler, Golem",
      },
      {
        name: "Grimer, Muk",
      },
      {
        name: "Exeggutor",
      },
      {
        name: "Marowak",
      },
             
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Professor Oak"
    }
  }
});
}
