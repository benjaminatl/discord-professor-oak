module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("Kyogre - #382")
    
    .setColor(0x00AE86)
    .setDescription("This Legendary Pokemon takes 5+ level 40 Trainers to defeat, 6+ if the Charge Move is Blizzard. If most Trainers are lower levels with minimum counters, 8+ is recommended.")
    .setFooter("© Professor Oak", "https://github.com/benjaminatl/discord-professor-oak/blob/master/images/professor-oak-go.png?raw=true")
    .setImage("https://github.com/benjaminatl/discord-professor-oak/blob/master/images/charts/kyogre-chart.jpg?raw=true")
    .setThumbnail("https://github.com/benjaminatl/discord-professor-oak/blob/master/images/3dmodels/pokemon_icon_382_00.png?raw=true")
    
    .addField("Type", "<:waterbadge:434377739248730113> <:electricbadge:456939752453570570>", true)
    .addField("Counter Type", "<:grassbadge:456939752591982623> <:electricbadge:456939752453570570>", true)
    .addField("Level 20 Max CP", "2328", true)
    .addField("Level 25 Max CP", "2910", true)
    .addField("Shiny Available", "Yes", true)
    .addField("Best Moveset", "Waterfall, Hydro Pump", true)

    .setTimestamp()
    .addField("Raid Boss Counters",
      "Raukio, Venasaur, Zapdos, Exeggutor, Alola Exeggutor, Septile, Groudon, Rayquaza, Latios, Mewtwo, Salamance, Dragonite, Victreebel, Vileplume, Tangela")
  
    message.channel.send({embed});
  }
