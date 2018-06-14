module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("Kyogre - # <:waterbadge:>")
    
    .setColor(0x00AE86)
    .setDescription("`Water` `Electric` type, Shiny form available.")
    .setFooter("© Professor Oak", "https://github.com/benjaminatl/discord-professor-oak/blob/master/images/professor-oak-default.jpg?raw=true")
    .setImage("https://github.com/benjaminatl/discord-professor-oak/blob/master/images/kyogre-chart.jpg?raw=true")
    .setThumbnail("https://github.com/benjaminatl/discord-professor-oak/blob/master/images/kyogre.png?raw=true")
    
    .addField("Type", "Water & Electric", true)
    .addField("Counter Type", "Grass", true)
    .addField("Level 20 Max CP", "2328", true)
    .addField("Level 25 Max CP", "2910", true)

    .setTimestamp()
    .addField("Raid Boss Counters",
      "Raukio, Venasaur, Zapdos, Exeggutor, Alola Exeggutor, Septile, Groudon, Rayquaza, Latios, Mewtwo, Salamance, Dragonite, Victreebel, Vileplume, Tangela")
   
    
  
    message.channel.send({embed});
  }
