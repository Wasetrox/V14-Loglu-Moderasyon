const { EmbedBuilder } = require('discord.js');

const config = require('../../config.json');

module.exports = {

    name: 'channelCreate',

    async execute(channel) {

        const logChannel = channel.guild.channels.cache.get(config.logChannelId);

        if (!logChannel) return;

        const embed = new EmbedBuilder()

            .setTitle('Channel Created')

            .setDescription(`A new channel has been created: ${channel.name}`)

            .setTimestamp();

        logChannel.send({ embeds: [embed] });

    },

};