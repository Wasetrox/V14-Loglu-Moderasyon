const { EmbedBuilder } = require('discord.js');

const config = require('../../config.json');

module.exports = {

    name: 'messageDelete',

    async execute(message) {

        if (message.partial) return;

        const logChannel = message.guild.channels.cache.get(config.logChannelId);

        if (!logChannel) return;

        const embed = new EmbedBuilder()

            .setTitle('Message Deleted')

            .setDescription(`Message by ${message.author.tag} deleted in ${message.channel}`)

            .addFields({ name: 'Content', value: message.content || 'No content' })

            .setTimestamp();

        logChannel.send({ embeds: [embed] });

    },

};