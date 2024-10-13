const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { channelRulesId } = require('../config');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Información del servidor.'),
    async execute(interaction) {
        const newMemberEmbed = new EmbedBuilder()
            .setColor('#000000')
            .setTitle('Información')
            .setAuthor({ name: 'Onichan Wow', iconURL: 'https://cdn.discordapp.com/attachments/1295016433364762645/1295047335394672752/435673677_859684392853857_5660758136077029016_n.png' })
            //.setThumbnail('https://cdn.discordapp.com/attachments/1099162149298917427/1099163445636628600/cinematic_render_frostmourne_full.jpg')

            .setDescription(`Únete a Onichan Wow y disfruta de todo nuestro contenido.\n
                        **Página Web:** https://onichanwow.com\n
                        **Realmlist:** set realmlist logon.onichanwow.com\n
                        Mas información en ${interaction.guild.channels.cache.get(channelRulesId)}
                        `)
            .setFooter({ text: `Solicitado por: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

        const registro = new ButtonBuilder()
            .setLabel('Registro')
            .setURL('https://onichanwow.com')
            .setStyle(ButtonStyle.Link);

        const descarga = new ButtonBuilder()
            .setLabel('Descarga')
            .setURL('https://wowdl.net/download/World-of-Warcraft-3.3.5a.12340-esES')
            .setStyle(ButtonStyle.Link);

        const row = new ActionRowBuilder()
            .addComponents(registro, descarga);

        return interaction.reply({ embeds: [newMemberEmbed], components: [row] });
    },
}; 