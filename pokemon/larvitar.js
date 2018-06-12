module.exports.run = (client, message, args) => {
  const Discord = require("discord.js");
const embed = new Discord.RichEmbed()

  .setTitle("Larvitar - #246")
  
  .setColor(0x00AE86)
  .setDescription("Rock | Ground")
  .setFooter("© Professor Oak", "client.user.avatarURL")
  .setThumbnail("https://rankedboost.com/wp-content/plugins/ice/pokemon-go/Larvitar-Pokemon-Go.png")
  
  .setTimestamp()
  .addField("Available Larvitar Commands",
    "Uncover even more information and hidden secrets about this Pokemon using the commands below. Remember Trainer, you must type the commands exactly as shown. *A Pokemon followed by a number within a command, refers to IV's. These commands return a quick search that can be entered into the in-game Pokemon search bar.*")
 
  .addField("!oak larvitar100", "100% IV", true)
  .addField("!oak larvitar98", "98%+ IV, 15 attack", true)
  .addField("!oak larvitar96", "96%+ IV, 15 attack", true)
  .addField("!oak larvitar93", "93%+ IV, 15 attack", true)
  .addField("!oak larvitar91", "90%+ IV, 15 attack", true)
  .addField("!oak larvitar0", "0% IV", true)

  message.channel.send({embed});
}