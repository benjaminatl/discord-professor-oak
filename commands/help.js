exports.run = (client, message, args) => {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    description: "Hello Trainer, Below is a list of commands I have learned through my research. To execute, type any command below exactly how they appear.",
    fields: [{
        name: "!oak help",
        value: "Will display this message *(list of commands)*."
      },
      {
        name: "!oak iv",
        value: "Get information on what Pokemon IV's are and how to check them."
      },
      {
        name: "!oak eeveetrick",
        value: "Discover how to evolve an Eevee into each eevolution use name and walking tricks."
      },
      {
        name: "!oak googlemap",
        value: "A map created by our community that shows all Gyms, Ex Raid eligable Gyms, in-game parks and water spawn locations."
      },
      {
        name: "!oak *gym* (replace *gym* with gym name, no spaces)",
        value: "General information about a specific gym along with map directions. More gyms coming soon... Currently available: *starbucks* & *eastcarroll*"
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
