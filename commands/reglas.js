const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rules')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDescription('Reglas de nuestro servidor Discord.'),
    async execute(interaction) {
        const newMemberEmbed = new EmbedBuilder()
            .setColor('#000000')
            .setTitle('Reglas de Discord.')
            .setAuthor({ name: 'Yamete Kudasai', iconURL: 'https://cdn.discordapp.com/attachments/1295016433364762645/1295016654975271026/00013-2646244120_redraw2.png' })
            .setThumbnail('https://cdn.discordapp.com/attachments/1295016433364762645/1295016654975271026/00013-2646244120_redraw2.png')

            .setDescription(`Las siguientes reglas pueden ser cambiados o editadas en cualquier momento. Por favor, léelascon regularidad. Cualquier incumplimiento de las siguientes reglas y/o los términos y condiciones pueden llevar a una advertencia o ban.\n
                        0️⃣1️⃣ Ser educado y cortés el uno con el otro.\n
                        0️⃣2️⃣ No está permitido publicar contenido: racista, relogioso y/o político.\n
                        0️⃣3️⃣ No des información personal sobre ti mismo u otras personas.\n
                        0️⃣4️⃣ No te hagas pasar por un miembro del staff de Warmagic.\n
                        0️⃣5️⃣ No envies mensajes privados a ningún miembro del staff.\n
                        0️⃣6️⃣ Respetar las reglas de cada canal.\n
                        0️⃣7️⃣ No acoses a ningun miembro del servidor.\n
                        0️⃣8️⃣ No usar apodos ridículamente largos, ofensivos, vulgares, etc.\n
                        0️⃣9️⃣ El nombrado de comunidades esta permitido siempre y cuando la intención no sea hacer publicidad para que entren a la misma.\n
                        1️⃣0️⃣ ${'**Cualquier conducta que sea contraria a estas reglas es motivo suficiente para silenciar o sancionar a la persona implicada, a discreción del moderador que lo considere.**'}
                        `)
            .setFooter({ text: `Solicitado por: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

        return interaction.reply({ embeds: [newMemberEmbed] });
    },
};