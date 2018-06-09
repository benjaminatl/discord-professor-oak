exports.run = (client, message, args) => {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    description: "Hello Trainer, Similarly to the anime and main series games, there is a special method to evolve Eevee. The trick is to give Eevee a specific nickname before evolving it. **This can be used only once per each evolution so it is highly recommended that you thoroughly plan before doing so**. ",
    fields: [{
        name: "V",
        value: "Will display this message *(list of commands)*."
      },
      {
        name: "F",
        value: "Get information on what Pokemon IV's are and how to check them."
      },
      {
        name: "J",
        value: "General information about a specific gym along with map directions."
      },
      {
        name: "U",
        value: "General information about a specific gym along with map directions."
      },
      {
        name: "5",
        value: "General information about a specific gym along with map directions."
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
