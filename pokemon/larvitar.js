module.exports.run = (client, message, args) => {
  const Discord = require("discord.js");
const embed = new Discord.RichEmbed()

  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Larvitar - #246", "client.user.avatarURL")
  
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("© Professor Oak", "client.user.avatarURL")
  .setThumbnail("https://rankedboost.com/wp-content/plugins/ice/pokemon-go/Larvitar-Pokemon-Go.png")
  
  .setTimestamp()
  .addField("This is a field title, it can hold 256 characters",
    "This is a field value, it can hold 1024 characters.")
 
  .addField("Inline Field", true)
  .addField("Inline Field 3", true);

  message.channel.send({embed});
}