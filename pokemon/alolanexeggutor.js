module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("Alolan Exeggutor - #103")

    .addField("Shiny", "No", true)
    
    .setColor(0x00AE86)
    .setDescription("`Grass` and `Dragon` type")
    .setFooter("© Professor Oak", "https://github.com/benjaminatl/discord-professor-oak/blob/master/images/professor-oak-default.jpg?raw=true")
    .setThumbnail("https://github.com/benjaminatl/discord-professor-oak/blob/master/images/alolanexeggutor.png?raw=true")
    
    .setTimestamp()
    .addField("Extended Commands",
      "Uncover even more information about this Pokemon using the commands below. *A Pokemon followed by a number within a command, refers to IV's. These commands return a quick search that can be entered into the in-game Pokemon search bar.*")
   
    .addField("!oak alolanexeggutor100", "100% IV", true)
    .addField("!oak alolanexeggutor98", "98% IV", true)
    .addField("!oak alolanexeggutor96", "96% IV, 15 attack, 14+ HP", true)
    .addField("!oak alolanexeggutor93", "93% IV, 15 attack, 14+ HP", true)
    .addField("!oak alolanexeggutor91", "91% IV, 15 attack, 14+ HP", true)
    .addField("!oak alolanexeggutor0", "0% IV", true)
  
    message.channel.send({embed});
  }