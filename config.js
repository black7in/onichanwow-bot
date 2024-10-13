const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    token: process.env.DISCORD_TOKEN || "",
    clientId: process.env.CLIENT_ID || "",
    guild: process.env.GUILD_ID || "",
    channelFormId: process.env.CHANNEL_FORM || "",
    channelRulesId: process.env.CHANNEL_RULES || "",
}