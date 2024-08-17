const { EmbedBuilder } = require('discord.js');

const config = require('../../config.json');

module.exports = {

    name: 'channelDelete',

    async execute(channel) {

        const logChannel = channel.guild.channels.cache.get(config.logChannelId);

        if (!logChannel) return;

        const embed = new EmbedBuilder()

            .setTitle('Channel Deleted')

            .setDescription(`A channel has been deleted: ${channel.name}`)

            .setTimestamp();

        logChannel.send({ embeds: [embed] });

    },

};