exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer! According to my research... Raids start spawning around 6am and despawn around 7:30pm.").catch(console.error);
}
