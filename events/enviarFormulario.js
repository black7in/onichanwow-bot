const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        if (!interaction.isButton()) return;

        if (interaction.customId == 'openForm') {
            //interaction.deferUpdate()

            const modal = new ModalBuilder()
                .setCustomId('myform')
                .setTitle('Formulario de Postulación');


            const primerPregunta = new TextInputBuilder()
                .setCustomId('primerPregunta')
                .setLabel("Biografia personal")
                .setPlaceholder('Nombre, edad, país de residencia. Cuentanos un poco sobre ti.')
                .setRequired(true)
                .setStyle(TextInputStyle.Paragraph);

            const segundaPregunta = new TextInputBuilder()
                .setCustomId('segundaPregunta')
                .setLabel("Experiencia como GM")
                .setPlaceholder('Cuentanos si tienes experiencia previa como GM en WoW o en otros juegos.')
                .setRequired(true)
                .setStyle(TextInputStyle.Paragraph);

            const terceraPregunta = new TextInputBuilder()
                .setCustomId('terceraPregunta')
                .setLabel("Tiempo disponible")
                .setPlaceholder('¿Cuántas horas a la semana puedes dedicarte?')
                .setRequired(true)
                .setStyle(TextInputStyle.Short);


            const cuartaPregunta = new TextInputBuilder()
                .setCustomId('cuartaPregunta')
                .setLabel("Expectativas")
                .setPlaceholder('¿Cuáles son tus expectativas como GM?')
                .setRequired(true)
                .setStyle(TextInputStyle.Paragraph);


            const firstActionRow = new ActionRowBuilder().addComponents(primerPregunta);
            const threeActionRow = new ActionRowBuilder().addComponents(segundaPregunta);
            const fiveActionRow = new ActionRowBuilder().addComponents(terceraPregunta);
            const sixeActionRow = new ActionRowBuilder().addComponents(cuartaPregunta);

            modal.addComponents(firstActionRow, threeActionRow, fiveActionRow, sixeActionRow);

            await interaction.showModal(modal);
        }
    },
};