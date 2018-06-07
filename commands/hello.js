exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer!").catch(console.error);
}
