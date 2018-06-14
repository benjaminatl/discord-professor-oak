exports.run = (client, message, args) => {
    message.channel.send("bulbasaur, charmander, squirtle, larvitar, kyogre").catch(console.error);
}