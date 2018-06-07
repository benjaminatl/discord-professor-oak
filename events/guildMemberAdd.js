exports.run = (client, member) => {
  let guild = member.guild;
  guild.defaultChannel.send(`Welcome ${member.user} to this server.`).catch(console.error);
}
