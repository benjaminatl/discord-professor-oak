exports.run = (client, message, args) => {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    description: "Hello Trainer, Similarly to the anime and main series games, there is a special method to evolve Eevee. The trick is to give Eevee a specific nickname *(or rename)* before evolving it. **This can be used only once per each evolution so it is highly recommended that you thoroughly plan before doing so**. ",
    fields: [{
        name: "Vaporeon",
        value: "Remane to *Rainer*"
      },
      {
        name: "Jolteon",
        value: "Remane to *Sparky*"
      },
      {
        name: "Flareon",
        value: "Remane to *Pyro*"
      },
      {
        name: "Espeon",
        value: "Remane to *Sakura*"
      },
      {
        name: "Umbreon",
        value: "Remane to *Tamao*"
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
