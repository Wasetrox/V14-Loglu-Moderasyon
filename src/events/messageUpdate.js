const { EmbedBuilder } = require('discord.js');

const config = require('../../config.json');

module.exports = {

    name: 'messageUpdate',

    async execute(oldMessage, newMessage) {

        if (oldMessage.partial || newMessage.partial) return;

        const logChannel = oldMessage.guild.channels.cache.get(config.logChannelId);

        if (!logChannel) return;

        const embed = new EmbedBuilder()

            .setTitle('Message Edited')

            .setDescription(`Message by ${oldMessage.author.tag} edited in ${oldMessage.channel}`)

            .addFields(

                { name: 'Before', value: oldMessage.content || 'No content' },

                { name: 'After', value: newMessage.content || 'No content' }

            )

            .setTimestamp();

        logChannel.send({ embeds: [embed] });

    },

};