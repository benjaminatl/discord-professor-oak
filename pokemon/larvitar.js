module.exports.run = (client, message, args) => {
  const Discord = require("discord.js");
const embed = new Discord.RichEmbed()

  .setTitle("Larvitar - #246")
  .setAuthor("© Professor Oak", "client.user.avatarURL")

  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setThumbnail("https://rankedboost.com/wp-content/plugins/ice/pokemon-go/Larvitar-Pokemon-Go.png")

  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("This is a field title, it can hold 256 characters",
    "This is a field value, it can hold 2048 characters.")

  .addField("Inline Field", "They can also be inline.", true)

  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

  message.channel.send({embed});
}