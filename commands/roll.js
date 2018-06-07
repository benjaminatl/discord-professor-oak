exports.run = (client, message, args) => {
    let number = message.content.split(" ").slice(1, 2)[0];
    if(number == null) {
        message.channel.send("Please insert a number for correct operation!");
        return;
    }
    var roll = Math.floor(Math.random() * number) + 1;
    message.channel.send("You rolled a " + roll + " out of " + number);
}
