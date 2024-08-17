const { EmbedBuilder } = require('discord.js');

const config = require('../../config.json');

module.exports = {

    name: 'roleUpdate',

    async execute(oldRole, newRole) {

        const logChannel = newRole.guild.channels.cache.get(config.logChannelId);

        if (!logChannel) return;

        const embed = new EmbedBuilder()

            .setTitle('Role Updated')

            .setDescription(`Role ${oldRole.name} has been updated to ${newRole.name}`)

            .setTimestamp();

        logChannel.send({ embeds: [embed] });

    },

};