module.exports.run = (client, message, args) => {
  const Discord = require("discord.js");
const embed = new Discord.RichEmbed()

  .setTitle("Larvitar - #246")

  .addField("Egg", "10K", true)
  .addField("Shiny", "Yes", true)
  
  .setColor(0x00AE86)
  
  .setFooter("© Professor Oak", "https://github.com/benjaminatl/discord-professor-oak/blob/master/images/professor-oak-default.jpg?raw=true")
  .setThumbnail("https://rankedboost.com/wp-content/plugins/ice/pokemon-go/Larvitar-Pokemon-Go.png")
  
  .setTimestamp()
  .addField("Extended Commands",
    "Uncover even more information about this Pokemon using the commands below. *A Pokemon followed by a number within a command, refers to IV's. These commands return a quick search that can be entered into the in-game Pokemon search bar.*")
 
  .addField("!oak larvitar100", "100% IV", true)
  .addField("!oak larvitar98", "98%+ IV, 15 attack", true)
  .addField("!oak larvitar96", "96%+ IV, 15 attack, 14+ HP", true)
  .addField("!oak larvitar93", "93%+ IV, 15 attack, 14+ HP", true)
  .addField("!oak larvitar91", "91%+ IV, 15 attack, 14+ HP", true)
  .addField("!oak larvitar0", "0% IV", true)

  message.channel.send({embed});
}