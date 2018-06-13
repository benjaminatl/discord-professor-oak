module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("Bulbasaur - #1")
    
    .setColor(0x00AE86)
    .setDescription("`Grass` type, Shiny form available.")
    .setFooter("© Professor Oak", "https://github.com/benjaminatl/discord-professor-oak/blob/master/images/professor-oak-default.jpg?raw=true")
    .setThumbnail("https://rankedboost.com/wp-content/plugins/ice/pokemon-go/Larvitar-Pokemon-Go.png")
    
    .setTimestamp()
    .addField("Extended Commands",
      "Uncover even more information about this Pokemon using the commands below. *A Pokemon followed by a number within a command, refers to IV's. These commands return a quick search that can be entered into the in-game Pokemon search bar.*")
   
    .addField("!oak bulbasaur100", "100% IV", true)
  
    message.channel.send({embed});
  }