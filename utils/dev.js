const package = require('../package.json')

module.exports.getStats = () => {
    let result = 
    {
        "name": `${package.name}`,
        "desc": `${package.description}`,
        "author": `${package.author}`,
        "license": `${package.license}`,
        "version": 
        {
            "latest": 
            {
                "version": `${package.version}`,
                "name": "https://www.npmjs.com/package/@ytgs5148/discord-utils",
                "changelog": "https://www.npmjs.com/package/@ytgs5148/discord-utils",
                "type": "BETA"
            }
        }
    }
    return result
}