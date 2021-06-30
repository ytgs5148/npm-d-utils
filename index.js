const messageData = require('./utils/message')
const guildData = require('./utils/guild')
const devData = require('./utils/dev')

try { var responseFile = require('../../../d-utils.json') } catch(e) {console.log("You dont have a custom message.json file! Default messages wil be sent! For more info click here:-")}

module.exports.kick = async (message , isDM , successEmbed) => {
    //Getting necesarry information
    const user = await messageData.messageBy(message)
    const targetUser = await messageData.getFirstPinged(message)
    const { member } = message

    //No mentioned user found!
    if (!targetUser) 
    {
        let errorCode = 0
        var errorResponse = "You need to mention a user in your message!"

        try 
        {
            let responseFromJSON = responseFile.kickNoMentions
            //message.json has been kept empty by the user!
            if (!responseFromJSON) {
                message.reply(`${errorResponse}`)
                return errorCode
            }

            //Got the response from message.json file
            errorResponse = responseFromJSON.toString()
        } catch(e) {}

        message.reply(`${errorResponse}`)
        return errorCode
    }

    const targetMember = message.guild.members.cache.get(targetUser.id)

    //Bug -> No user found
    if (!user) {
        throw new Error(`There was a critical error! No user was found in message Object! This is a very rare error. If you have encountered this, pls report it!`)
    }

     //Checking basic stuff
        //Checking if has permission
        if ( !member.hasPermission('ADMINISTRATOR') || !member.hasPermission('KICK_MEMBERS') ) {
            let errorCode = 1
            let response = "You dont have permission to kick a user!"

            try{
                //If message.json doesnt exist, then throw a error which gets catched and replies the default message
                let JSONresponse = responseFile.kickNoPerms
                //message.json exists
                if (JSONresponse) {
                    //everything exists
                    response = JSONresponse.toString()
                }
            } catch(e) {}

            message.reply(`${response}`)
            return errorCode
        }
        // Kicking itself.... dumb
        if (message.author.id == targetUser.id) {
            let errorCode = 2
            let response = "You cannot kick yourself"

            try{
                //If message.json doesnt exist, then throw a error which gets catched and replies the default message
                let JSONresponse = responseFile.kickItself
                //message.json exists
                if (JSONresponse) {
                    //everything exists
                    response = JSONresponse.toString()
                }
            } catch(e) {}

            message.reply(`${response}`)
            return errorCode
        }
        if (targetMember.hasPermission("ADMINISTRATOR") || targetMember.hasPermission('KICK_MEMBERS')) {
            let errorCode = 3
            let response = "You cannot kick that user!"

            try{
                //If message.json doesnt exist, then throw a error which gets catched and replies the default message
                let JSONresponse = responseFile.kickTargetHasPerms
                //message.json exists
                if (JSONresponse) {
                    //everything exists
                    response = JSONresponse.toString()
                }
            } catch(e) {}

            message.reply(`${response}`)
            return errorCode
        }

    //DM-ing the user
    if (isDM == true) {
        let response = "You have been kicked from a server!"

        try{
            let JSONresponse = responseFile.kickMessageDM
            if (JSONresponse) {
                response = JSONresponse.toString()
            }
        } catch(e) {}

        try{
            //Sending the DM
            await message.channel.type === (`"dm"`) + targetUser.send(response)
        } catch(e) {
            //Error sending DM
            console.log("[kick.sendDM]Cannot send a DM to that user! Maybe his DMs are closed or the targetUser is a bot!")
        }
    }

    //Kicking the user!
    let errorCode = 4
    try{
        targetMember.kick()
    } catch(e) {
        //Cannot kick that user!
        console.log("[kick.botHasNoPerms] Cannot kick that user! Does the bot has enough perms?")
        return errorCode
    }

    //Sending success message
    console.log(`${targetUser.username} has been kicked from the server by ${message.author.username}`)
    if (successEmbed) message.channel.send(successEmbed)
    return 202 //202 means success
}

module.exports.ban = async (message , isDM , successEmbed) => {
    //Getting necesarry information
    const user = await messageData.messageBy(message)
    const targetUser = await messageData.getFirstPinged(message)
    const { member } = message

    //No mentioned user found!
    if (!targetUser) 
    {
        let errorCode = 5
        var errorResponse = "You need to mention a user in your message!"

        try 
        {
            let responseFromJSON = responseFile.banNoMentions
            //message.json has been kept empty by the user!
            if (!responseFromJSON) {
                message.reply(`${errorResponse}`)
                return errorCode
            }

            //Got the response from message.json file
            errorResponse = responseFromJSON.toString()
        } catch(e) {}

        message.reply(`${errorResponse}`)
        return errorCode
    }

    const targetMember = message.guild.members.cache.get(targetUser.id)

    //Bug -> No user found
    if (!user) {
        throw new Error(`There was a critical error! No user was found in message Object! This is a very rare error. If you have encountered this, pls report it!`)
    }

     //Checking basic stuff
        //Checking if has permission
        if ( !member.hasPermission('ADMINISTRATOR') || !member.hasPermission('BAN_MEMBERS') ) {
            let errorCode = 6
            let response = "You dont have permission to ban a user!"

            try{
                //If message.json doesnt exist, then throw a error which gets catched and replies the default message
                let JSONresponse = responseFile.banNoPerms
                //message.json exists
                if (JSONresponse) {
                    //everything exists
                    response = JSONresponse.toString()
                }
            } catch(e) {}

            message.reply(`${response}`)
            return errorCode
        }
        // Kicking itself.... dumb
        if (message.author.id == targetUser.id) {
            let errorCode = 7
            let response = "You cannot ban yourself"

            try{
                //If message.json doesnt exist, then throw a error which gets catched and replies the default message
                let JSONresponse = responseFile.banItself
                //message.json exists
                if (JSONresponse) {
                    //everything exists
                    response = JSONresponse.toString()
                }
            } catch(e) {}

            message.reply(`${response}`)
            return errorCode
        }
        if (targetMember.hasPermission("ADMINISTRATOR") || targetMember.hasPermission('BAN_MEMBERS')) {
            let errorCode = 8
            let response = "You cannot ban that user!"

            try{
                //If message.json doesnt exist, then throw a error which gets catched and replies the default message
                let JSONresponse = responseFile.banTargetHasPerms
                //message.json exists
                if (JSONresponse) {
                    //everything exists
                    response = JSONresponse.toString()
                }
            } catch(e) {}

            message.reply(`${response}`)
            return errorCode
        }

    //DM-ing the user
    if (isDM == true) {
        let response = "You have been banned from the server!"

        try{
            let JSONresponse = responseFile.banMessageDM
            if (JSONresponse) {
                response = JSONresponse.toString()
            }
        } catch(e) {}

        await message.channel.type === (`"dm"`) + targetUser.send(response)
    }

    //Kicking the user!
    let errorCode = 9
    try{
        await targetMember.ban()
    } catch(e) {
        //Cannot kick that user!
        console.log("[ban.botHasNoPerms] Cannot ban that user! Does the bot has enough perms?")
        return errorCode
    }

    //Sending success message
    console.log(`${targetUser.username} has been banned from the server by ${message.author.username}`)
    if (successEmbed) message.channel.send(successEmbed)

    return 202
}

module.exports.unban = async (message , targetID , successEmbed) => {
    const { member } = message

    //If target exists
    if (!targetID) {
        throw new Error("You need to mention a target user ID to unban!")
    }
    //Checking for permission
    if (!member.hasPermission("BAN_MEMBERS") || !member.hasPermission("ADMINISTRATOR")) {
        let errorCode = 14
        let response = "You dont have permission to use this command!"

        try{
            //If message.json doesnt exist, then throw a error which gets catched and replies the default message
            let JSONresponse = responseFile.unbanNoPerms
            //message.json exists
            if (JSONresponse) {
                //everything exists
                response = JSONresponse.toString()
            }
        } catch(e) {}

        message.reply(`${response}`)
        return errorCode
    }

    //Unbanning the user!
    message.guild.fetchBans().then(bans => {
        //No banned user in the guild BanList!
        if(bans.size == 0) {
            let errorCode = 15
            let response = "There are no banned users in the banlist!"

            try{
                //If message.json doesnt exist, then throw a error which gets catched and replies the default message
                let JSONresponse = responseFile.noBannedUser
                //message.json exists
                if (JSONresponse) {
                    //everything exists
                    response = JSONresponse.toString()
                }
            } catch(e) {}

            message.reply(`${response}`)
            return errorCode
        }

        //Searching for a user with the targetID
        let bUser = bans.find(b => b.user.id == targetID)

        //That user isnt banned!
        if(!bUser) {
            let errorCode = 16
            let response = "That user isnt banned!"

            try{
                //If message.json doesnt exist, then throw a error which gets catched and replies the default message
                let JSONresponse = responseFile.userNotBanned
                //message.json exists
                if (JSONresponse) {
                    //everything exists
                    response = JSONresponse.toString()
                }
            } catch(e) {}

            message.reply(`${response}`)
            return errorCode
        }

        //Unbanning the user!
        message.guild.members.unban(bUser.user).then(() => {
            if (successEmbed) {
                message.reply(successEmbed)
            } else {
                console.log("Unbanned!")
            }
        })
    })

    return 202
}

module.exports.mute = async (message , successEmbed) => {
    let target = message.mentions.members.first()
    let muteRole = message.guild.roles.cache.find(r => r.name === "Muted")
    let { member } = message

    //No Target
    if (!target) {
        let errorCode = 10
        var errorResponse = "You need to mention a user in your message!"

        try 
        {
            let responseFromJSON = responseFile.muteNoMentions
            //message.json has been kept empty by the user!
            if (!responseFromJSON) {
                message.reply(`${errorResponse}`)
                return errorCode
            }

            //Got the response from message.json file
            errorResponse = responseFromJSON.toString()
        } catch(e) {}

        message.reply(`${errorResponse}`)
        return errorCode
    }

    const targetMember = message.guild.members.cache.get(target.id)

    //Muting itself!
    if (target.id === message.author.id) {
        let errorCode = 11
        var errorResponse = "You cannot mute yourself!"

        try 
        {
            let responseFromJSON = responseFile.muteItself
            //message.json has been kept empty by the user!
            if (!responseFromJSON) {
                message.reply(`${errorResponse}`)
                return errorCode
            }

            //Got the response from message.json file
            errorResponse = responseFromJSON.toString()
        } catch(e) {}

        message.reply(`${errorResponse}`)
        return errorCode
    }
    //Permission
    if (!member.hasPermission("ADMINISTRATOR") || !member.hasPermission("MANAGE_ROLES")) {
        let errorCode = 12
        let response = "You dont have permission to mute a user!"

        try{
            //If message.json doesnt exist, then throw a error which gets catched and replies the default message
            let JSONresponse = responseFile.muteNoperms
            //message.json exists
            if (JSONresponse) {
                //everything exists
                response = JSONresponse.toString()
            }
        } catch(e) {}

        message.reply(`${response}`)
        return errorCode
    }
    //If target has equal permission!
    if (targetMember.hasPermission("ADMINISTRATOR") || targetMember.hasPermission("MANAGE_ROLES")) {
        let errorCode = 13
        let response = "You cannot mute that user!"

        try{
            //If message.json doesnt exist, then throw a error which gets catched and replies the default message
            let JSONresponse = responseFile.muteTargetHasPerms
            //message.json exists
            if (JSONresponse) {
                //everything exists
                response = JSONresponse.toString()
            }
        } catch(e) {}

        message.reply(`${response}`)
        return errorCode
    }

    // Checking if mute role exists
    if (!muteRole) 
    {
      // Creating one if it doesnt
      try 
      {
        muteRole = await message.guild.roles.create({
          data: 
          {
            name: "Muted",
            color: "#514f48",
            permissions: []
          }
        })
        message.guild.channels.cache.each((channel) => 
        {
          channel.updateOverwrite(muteRole, {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: false,
            READ_MESSAGE_HISTORY: true,
            TALK: false
          });
        });
      } catch (err) { console.error(err) }
    }

    //Adding Mute role!
    target.roles.add(muteRole.id).then(() => {
        if (successEmbed) {
            message.reply(successEmbed)
        } else {
            console.log(`Muted ${target.username}!`)
        }
    })

    return 202
}

module.exports.getGuildInfo = async (message) => {
    const result = await guildData.getGuildData(message)
    if (!result) return null

    return result
}

module.exports.guildIcon = async (message , size) => {
    const icon = await guildData.getGuildImage(message , size)

    return icon
}

module.exports.getVersion = async() => {
    return devData.getStats()
}