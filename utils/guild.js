module.exports.getGuildData = (message) => {
    const { guild } = message

    if (!guild) {
        return null
    }

    const data = {
        "id": `${guild.id}`,
        "name": `${guild.name}`,
        "icon": `${guild.icon}`,
        "region": `${guild.region}`,
        "memberCount": `${guild.memberCount}`,
        "date_joined": `${new Date(guild.joinedTimestamp)}`,
        "verificationLvl": `${guild.mfaLevel}`,
        "iconLink": `${this.getGuildImage(message)}`
    }

    return data
}

module.exports.getGuildImage = (message , size) => {
    const { guild } = message

    let imageID = guild.icon
    let guildID = guild.id

    if (!imageID || !guildID) return null
    if (!size) size = 128

    const link = `https://cdn.discordapp.com/icons/${guildID}/${imageID}.png?size=${size}`

    return link
}