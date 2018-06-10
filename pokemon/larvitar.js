var embedhelpmember = new Discord.RichEmbed() // sets a embed box to the variable embedhelpmember
            .setTitle("**List of Commands**\n") // sets the title to List of Commands
            .addField(" - help", "Displays this message (Correct usage: *help)") // sets the first field to explain the command *help
            .addField(" - info", "Tells info about myself :grin:") // sets the field information about the command *info
            .addField(" - ping", "Tests your ping (Correct usage: *ping)") // sets the second field to explain the command *ping
            .addField(" - cookie", "Sends a cookie to the desired player! :cookie: (Correct usage: *cookie @username)") // sets the third field to explain the command *cookie
            .addField(" - 8ball", "Answers to all of your questions! (Correct usage: *8ball [question])") // sets the field to the 8ball command
            .setColor(0xFFA500) // sets the color of the embed box to orange
            .setFooter("You need help, do you?") // sets the footer to "You need help, do you?"
        var embedhelpadmin = new Discord.RichEmbed() // sets a embed box to the var embedhelpadmin
            .setTitle("**List of Admin Commands**\n") // sets the title
            .addField(" - say", "Makes the bot say whatever you want (Correct usage: *say [message])")
            .addField(" - mute", "Mutes a desired member with a reason (Coorect usage: *mute @username [reason])") // sets a field
            .addField(" - unmute", "Unmutes a muted player (Correct usage: *unmute @username)")
            .addField(" - kick", "Kicks a desired member with a reason (Correct usage: *kick @username [reason])") //sets a field
            .setColor(0xFF0000) // sets a color
            .setFooter("Ooo, an admin!") // sets the footer
        message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
        if(message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
    }