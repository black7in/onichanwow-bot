const { channelRulesId } = require('../config');
module.exports = {
    name: 'guildMemberAdd',
    execute(member) {
        member.guild.channels.cache.get('1294355860792803439').send(member.user.toString() + ` bienvenid@ al servidor de OnichanWow. Por favor lee nuestras reglas en el canal de reglas ${member.guild.channels.cache.get(channelRulesId)}.`);
    }
};