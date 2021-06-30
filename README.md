# What does this package do?

@ytgs5148/discord-utils is a npm package which makes Discord commands much easier, saving hundreds of line of code. It is customizable and you can use custom responses too. It automatically checks for permission and does all the basic stuff such as **kicking itself** / **checking if target also has same or higher perms** and **much more**

# Note
1. You must use discord.js to use this package.
2. Use "await" method.

## Installation
```bash
npm install @ytgs5148/discord-utils
```

## Usage

```javascript
//Importing d-utils and setting up djs
const utils = require('@ytgs5148/discord-utils')
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
1. [**Object**] The **message** object found in Discord.js (d-utils automatically gets the first pinged user and kick them!)
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
1. [**Object**] The **message** object found in Discord.js (d-utils automatically gets the first pinged user and kick them!)
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
1. [**Object**] The **message** object found in Discord.js (d-utils automatically gets the first pinged user and kick them!)
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

If there is a error, it eithers logs it in console, or sends a default message to the Discord channel. You can customize the response in custom response file. To know more read above!

## License
[MIT](https://choosealicense.com/licenses/mit/)