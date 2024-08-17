const { EmbedBuilder } = require('discord.js');

const config = require('../../config.json');

module.exports = {

    name: 'channelUpdate',

    async execute(oldChannel, newChannel) {

        const logChannel = newChannel.guild.channels.cache.get(config.logChannelId);

        if (!logChannel) return;

        const embed = new EmbedBuilder()

            .setTitle('Channel Updated')

            .setDescription(`Channel ${oldChannel.name} has been updated to ${newChannel.name}`)

            .setTimestamp();

        logChannel.send({ embeds: [embed] });

    },

};