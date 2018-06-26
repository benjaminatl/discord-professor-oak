module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("Regice")
    
    .setColor(0x00AE86)
    .setDescription("This Legendary Pokemon takes 5+ level 40 Trainers to defeat, 6+ if the Charge Move is Blizzard. If most Trainers are lower levels with minimum counters, 8+ is recommended.")
    .setFooter("© Professor Oak", "https://github.com/benjaminatl/discord-professor-oak/blob/master/images/professor-oak-go.png?raw=true")
    .setImage("https://github.com/benjaminatl/discord-professor-oak/blob/master/images/charts/kyogre-chart.jpg?raw=true")
    .setThumbnail("https://github.com/benjaminatl/discord-professor-oak/blob/master/images/3dmodels/pokemon_icon_382_00.png?raw=true")
    
    .addField("Type", "", true)
    .addField("Counter Type", "", true)
    .addField("Level 20 Max CP", "", true)
    .addField("Level 25 Max CP", "", true)
    .addField("Shiny Available", "", true)
    .addField("Best Moveset", "", true)

    .setTimestamp()
    .addField("Raid Boss Counters",
      "")
  
    message.channel.send({embed});
  }
