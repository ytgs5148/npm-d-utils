module.exports.messageBy = (message) => {
    let user = message.author.id
    if (user) {
        return user
    }
    return null
}

module.exports.getFirstPinged = (message) => {
    const firstMentionedUser = message.mentions.users.first()
    return firstMentionedUser
}