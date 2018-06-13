module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("Squirtle - #7")
    
    .setColor(0x00AE86)
    .setDescription("`Water` type")
    .setFooter("© Professor Oak", "https://github.com/benjaminatl/discord-professor-oak/blob/master/images/professor-oak-default.jpg?raw=true")
    .setThumbnail("https://github.com/benjaminatl/discord-professor-oak/blob/master/images/squirtle.png?raw=true")
    
    .setTimestamp()
    .addField("Extended Commands",
      "Uncover even more information about this Pokemon using the commands below. *A Pokemon followed by a number within a command, refers to IV's. These commands return a quick search that can be entered into the in-game Pokemon search bar.*")
   
    .addField("!oak squirtle100", "100% IV", true)
  
    message.channel.send({embed});
  }