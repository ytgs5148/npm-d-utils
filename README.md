# What does this package do?

@ytgs5148/d-utils is a npm package which makes Discord commands much easier, saving hundreds of line of code. It is customizable and you can use custom responses too. It automatically checks for permission and does all the basic stuff such as **kicking itself** / **checking if target also has same or higher perms** and **much more**

# Note
1. You must use discord.js to use this package.
2. Use "await" method.

# ChangeLog
**v1.0.1** *Minor Update*
1. [**Bugs**] Fixed some mistakes/spellings in the readme file
2. [**Bugs**] Changed @ytgs5148/discord-utils to **@ytgs5148/d-utils** (typo in the readme file)
3. [**Bugs**] DM-ing a user while using kick() or ban() shows an error in the console
4. [**Bugs**] Fixed a issue in the readme file where it used to display parameter info of kick() function in place of all the other function's info.
5. [**Feature**] Added .guildIcon() function to get the guildIcon link.
6. [**Feature**] Added .getGuildInfo() to show some information about the guild!


[**Changes**] *Updating to the new version would require no changes to your existing file. Response file will be the same. Only new features has been added and no changes to older features has been made!*

<br>

**v1.0.0** *Birthday*

## Installation
```bash
npm install @ytgs5148/d-utils
```

## Usage

```javascript
//Importing d-utils and setting up djs
const utils = require('@ytgs5148/d-utils')
const Discord = require('discord.js')
const client = new Discord.Client()

//Token
const token = "some_token_here"

//Runs every message!
client.on("message" , async (msg) => {
    //If someone uses "!kick" command!
    if (msg.content.includes("!kick")) {

        //Creating embed to run if the user is kicked!
        const embed = new Discord.MessageEmbed().setDescription("Kicked!")

        await utils.kick(msg , true , embed)
    }
    //There are more commands available! Continue reading to know more!
})

client.login(token)
```
# .kick()
1. [**Object**] The **message** object found in Discord.js (d-utils automatically gets the first pinged user and kick them!)
2. [**Boolean**] Use **true** if you want to send a DM or vice versa. (in the custom response file which you will get to know later , you can set custom DM response, for embeds, set it to **false**!)
3. [**Embed/String**] Pass in a **embed** or **string** to be sent if successful

```javascript
client.on("message" , async (message) => {

    if (msg.content.includes("!kick")) {
        const embed = new Discord.MessageEmbed().setTitle("kicked")
        const result = await utils.kick(message , true , embed)
        if (result == 202) {
            //Successful! If it sends other numbers, then there is a error! Keep reading through the file to get to know
        }
    }
})
```

Using this saves **125** lines of code. For custom responses, keep reading through the file

# .ban()
1. [**Object**] The **message** object found in Discord.js (d-utils automatically gets the first pinged user and bans them!)
2. [**Boolean**] Use **true** if you want to send a DM. (in the custom response file which you will get to know later , you can set custom DM response, for embeds, set it to **false**!)
3. [**Embed/String**] Pass in a **embed** or **string** to be sent if successful

```javascript
client.on("message" , async (message) => {

    if (msg.content.includes("!ban")) {
        const embed = new Discord.MessageEmbed().setTitle("banned")
        await utils.ban(message , true , embed)
        if (result == 202) {
            //Successful! If it sends other numbers, then there is a error! Keep reading through the file to get to know
        }
    }
})
```

Using this saves **120** lines of code. For custom responses, keep reading through the file

# .unban()
1. [**Object**] The **message** object found in Discord.js (d-utils automatically gets the first pinged user and unbans them!)
2. [**Integer**] Pass the userID for the user you want to unban!
3. [**Embed/String**] Pass in a **embed** or **string** to be sent if successful

```javascript
client.on("message" , async (message) => {

    if (msg.content.includes("!unban")) {
        const embed = new Discord.MessageEmbed().setTitle("unbanned")
        await utils.unban(message , 12345678 , embed)
        if (result == 202) {
            //Successful! If it sends other numbers, then there is a error! Keep reading through the file to get to know
        }
    }
})
```

Using this saves **80** lines of code. For custom responses, keep reading through the file

# .mute()
1. [**Object**] The **message** object found in Discord.js (d-utils automatically gets the first pinged user and mutes them!)
2. [**Embed/String**] Pass in a **embed** or **string** to be sent if successful

```javascript
client.on("message" , async (message) => {

    if (msg.content.includes("!mute")) {
        const embed = new Discord.MessageEmbed().setTitle("muted")
        await utils.mute(message , embed)
        if (result == 202) {
            //Successful! If it sends other numbers, then there is a error! Keep reading through the file to get to know
        }
    }
})
```

Using this saves **123** lines of code. For custom responses, keep reading through the file

# .getGuildInfo()
1. [**Object**] The **message** object found in Discord.js 

```javascript
client.on("message" , async (message) => {

    if (msg.content.includes("!serverinfo")) {
        const result = await utils.getGuildInfo(message)
        //The result variable has some information stored in it.
        const embed = new Discord.MessageEmbed()
        .setImage(`${result.iconLink}`)
        .setTitle(`${result.name}`)

        message.reply(embed)
    }
})
```

```javascript
{
  id: '123456789101112131',
  name: 'Discord',
  icon: '8eab3a82c675391'
  region: 'mars',
  memberCount: '50456',
  date_joined: 'Thu May 20 2021 09:07:34 GMT',
  verificationLvl: '0',
  iconLink: 'https://cdn.discordapp.com/icons/123456789101112131/8eab3a82c675391.png?size=128'
}
```

# .guildIcon()
1. [**Object**] The **message** object found in Discord.js.
2. [**Integer**] Pass the size of the icon. e.g. **128** , **64** , **16** If not used, will use 128 by default!

```javascript
client.on("message" , async (message) => {

    if (msg.content.includes("!serverIcon")) {
        const result = await utils.getIcon(message , 128)

        message.reply(result)
        //Shows a link of the guild icon. Can be used in embeds( .setImage() )
    }
})
```

# Custom Responses
## Steps
1. Create a file called "d-utils.json" just outside your node_modules!
2. Doing the first step will get get rid of a warning in the console!
3. Currently, the file will be empty, so it will still use the default response.
4. Paste the following code in the JSON file and customize the values.
5. Dont change the names! or else it wont work
6.  **The file name should be the same.**

```JSON
{
    "Information": "These are custom responses. Place this directly outside the node_modules!",

    "kickNoMentions": "You need to mention a user to kick!",
    "kickNoPerms": "You need to either have Administrator or Kick Members permission to run this command!",
    "kickItself": "You cannot kick yourself!",
    "kickMessageDM": "You have been kicked from a guild!",
    "kickTargetHasPerms": "You cannot kick that user!",

    "muteNoMentions": "You need to mention a user to mute!",
    "muteItself": "You cannot mute yourself!",
    "muteNoperms": "You dont have permission to mute a user!",
    "muteTargetHasPerms": "That user also has the same or higher permission than you!",

    "banNoMentions": "Mention a user in your message to ban!",
    "banNoPerms": "You dont have permission to ban a user!",
    "banItself": "You cant ban yourself!",
    "banTargetHasPerms": "The other person has equal or higher permission that yours!",
    "banMessageDM": "You have been banned from a guild!",

    "unbanNoPerms": "You dont have permission to unban a user!",
    "userNotBanned": "That user isnt banned!",
    "noBannedUser": "There arent any banned users!"
}
```

^This will be updated in newer versions.

# Note
I am working on adding more commands such as tickets , warning and economy commands! If there are any mistakes in this file, feel free to DM me. Also if there are any issues with the package, DM me!

If there is a error, it eithers logs it in console, or sends a default message to the Discord channel. You can customize the response in custom response file. To know more read above!

# Contact
1. Discord: **YTGS#2697** *(use this!)* or YTGS#0001

# Error Codes
```
| Code          | Information                                           |
| ------------- | -------------                                         |
| 0             | [kick] Didnt mention a user!                          |
| 1             | [kick] User doesnt have permission                    |
| 2             | [kick] Trying to kick itself                          |
| 3             | [kick] Kicking a user with same or higher permission  |
| 4             | [kick] BOT doesnt have enough perms to kick the user  |

| 5             | [ban] Didnt mention a user!                           |
| 6             | [ban] User doesnt have permission                     |
| 7             | [ban] Banning itself                                  |
| 8             | [ban] Banning a user with same or higher permission   |
| 9             | [ban] BOT doesnt have enough perms to ban the user    |

| 10            | [mute] Didnt mention a user!                          |
| 11            | [mute] Trying to mute itself                          |
| 12            | [mute] User doesnt have permission                    |
| 13            | [mute] Muting a user with same or higher permission   |

| 14            | [unban] User doesnt have permission                   |
| 15            | [unban] No banned user in the banlist!                |
| 16            | [unban] User isnt banned                              |
```


## License
[MIT](https://choosealicense.com/licenses/mit/)