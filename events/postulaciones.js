const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js')
module.exports = {
    name: 'messageCreate',
    execute(msg) {
        if (msg.content.startsWith('.' + 'postulaciones')) {

            if (msg.author.bot) return;
            msg.delete({ timeout: 10 });

            ///if (!msg.member.permissionsIn(msg.channel).has(PermissionFlagsBits.Administrator)) return;
            if (!msg.member.roles.cache.some(role => role.name === 'Administrador')) return;

            const button = new ButtonBuilder()
                .setCustomId('openForm')
                .setLabel('Enviar Formulario')
                .setStyle(ButtonStyle.Success)
                .setDisabled(false)
                .setEmoji('📝');

            const row = new ActionRowBuilder()
                .addComponents(button);

            const newMemberEmbed = new EmbedBuilder()
                .setColor('#000000')
                .setTitle('Convocatoria Abierta.')
                //.setAuthor({ name: 'Warmagic Wow', iconURL: 'https://cdn.discordapp.com/attachments/1099162149298917427/1099162339665793094/world-of-warcraft.png' })
                //.setThumbnail('https://cdn.discordapp.com/attachments/1099162149298917427/1099163445636628600/cinematic_render_frostmourne_full.jpg')

                .setDescription(`¡Hola a todos los jugadores de World of Warcraft!\n
                        Estamos emocionados de anunciar que estamos abriendo una convocatoria para Maestros de Juego (GMs) en nuestro servidor.\n
                        Si eres un apasionado del juego, te encanta ayudar a otros jugadores y quieres formar parte de un equipo comprometido con brindar la mejor experiencia de juego posible, esta puede ser una excelente oportunidad para ti.\n
                        Estamos buscando personas con experiencia en WoW, conocimiento en las diferentes clases y especializaciones, y habilidades de resolución de problemas para ayudar a nuestros jugadores en el juego. Si tienes experiencia previa como GM en WoW o en otros juegos, ¡mucho mejor!\n
                        Es importante que tengas una buena disponibilidad horaria. Además, buscamos personas que puedan trabajar en equipo, sean responsables y comprometidas con el proyecto.\n
                        Si cumples con estos requisitos y te apasiona el mundo de WoW, ¡te invitamos a postularte como Maestro de Juego en nuestro servidor! Brindamos un ambiente amigable, una comunidad activa y la oportunidad de ser parte de un equipo apasionado por el juego.\n
                        Si estás interesado, por favor envía tu solicitud respondiendo a las preguntas incluidas en el formulario. ¡Esperamos recibir tu solicitud y esperamos conocerte pronto!
                        `)
                .setImage('https://cdn.discordapp.com/attachments/1295016433364762645/1295055796626784427/gms.png')
                .setFooter({ text: `Solicitado por: ${msg.member.user.tag}`, iconURL: msg.member.user.displayAvatarURL() });
            msg.channel.send({ embeds: [newMemberEmbed], components: [row] });
        }
    },
};