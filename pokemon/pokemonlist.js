exports.run = (client, message, args) => {
    message.channel.send("bulbasaur, charmander, squirtle, larvitar").catch(console.error);
}