module.exports = {
    name: 'messageCreate',
    execute(msg) {
        if (msg.content.startsWith('.' + 'say')) {

            if (msg.author.bot) return;

            //if (!msg.member.roles.cache.has(PermissionFlagsBits.Administrator)) return;
            if (!msg.member.roles.cache.some(role => role.name === 'Administrador')) return;

            const SayMessage = msg.content.slice(5).trim();

            msg.channel.send(SayMessage)
            msg.delete({ timeout: 10 });
        }
    },
};