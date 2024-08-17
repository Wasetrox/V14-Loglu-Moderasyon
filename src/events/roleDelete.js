const { EmbedBuilder } = require('discord.js');

const config = require('../../config.json');

module.exports = {

    name: 'roleDelete',

    async execute(role) {

        const logChannel = role.guild.channels.cache.get(config.logChannelId);

        if (!logChannel) return;

        const embed = new EmbedBuilder()

            .setTitle('Role Deleted')

            .setDescription(`A role has been deleted: ${role.name}`)

            .setTimestamp();

        logChannel.send({ embeds: [embed] });

    },

};