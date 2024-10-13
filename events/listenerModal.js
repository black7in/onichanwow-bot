const { EmbedBuilder } = require('discord.js')
const { channelFormId } = require('../config')
module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        if (!interaction.isModalSubmit()) return;

        if (interaction.customId === 'myform') {
            const primerPregunta = interaction.fields.getTextInputValue('primerPregunta');
            const segundaPregunta = interaction.fields.getTextInputValue('segundaPregunta');
            const tercerPregunta = interaction.fields.getTextInputValue('tercerPregunta');
            const cuartraPregunta = interaction.fields.getTextInputValue('cuartraPregunta');

            const newMemberEmbed = new EmbedBuilder()
                .setColor('#000000')
                .setTitle(`Postulante: ${interaction.user.username}.`)
                .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
                .setDescription(`Respuestas:\n
                        ${'**1. Datos personales.**'}\n
                        ${primerPregunta}\n
                        ${'**2. Experiencia como Gm**'}\n
                        ${segundaPregunta}\n
                        ${'**3. Tiempo Disponible**'}\n
                        ${tercerPregunta}\n
                        ${'**4. Expectativas**'}\n
                        ${cuartraPregunta}\n
                        `)

            const channel = interaction.guild.channels.cache.get(channelFormId);
            if (channel)
                channel.send({ embeds: [newMemberEmbed] });
            await interaction.reply({ content: 'Tus datos fueron enviados, pronto te contactaremos para una entrevista. Gracias.', ephemeral: true });
        }
    },
};