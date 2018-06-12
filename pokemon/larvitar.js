module.exports.run = (client, message, args) => {
  const Discord = require("discord.js");
const embed = new Discord.RichEmbed()

  .setTitle("Larvitar - #246")
  .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  
  .setColor(0x00AE86)
  .setDescription("Rock | Ground")
  .setFooter("© Professor Oak", "http://i.imgur.com/w1vhFSR.png")
  .setThumbnail("https://rankedboost.com/wp-content/plugins/ice/pokemon-go/Larvitar-Pokemon-Go.png")
  
  .setTimestamp()
  .addField("Available Larvitar Commands",
    "To uncover even more information about Larvitar, use the commands below.")
 
  .addField("!oak larvitar100", "100% IV", true)
  .addField("!oak larvitar98", "98%+ IV, 15 attack", true)
  .addField("!oak larvitar96", "96%+ IV, 15 attack", true)
  .addField("!oak larvitar93", "93%+ IV, 15 attack", true)
  .addField("!oak larvitar91", "90%+ IV, 15 attack", true)
  .addField("!oak larvitar0", "0% IV", true)

  message.channel.send({embed});
}