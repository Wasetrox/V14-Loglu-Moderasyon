const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

    data: new SlashCommandBuilder()

        .setName('timeout')

        .setDescription('Timeouts a user.')

        .addUserOption(option =>

            option.setName('target')

                .setDescription('The user to timeout')

                .setRequired(true))

        .addIntegerOption(option =>

            option.setName('duration')

                .setDescription('Timeout duration in minutes')

                .setRequired(true)),

    async execute(interaction) {

        const target = interaction.options.getUser('target');

        const member = interaction.guild.members.cache.get(target.id);

        const duration = interaction.options.getInteger('duration');

        if (!member) return interaction.reply('User not found.');

        await member.timeout(duration * 60 * 1000); // Convert to milliseconds

        await interaction.reply(`${target.tag} has been timed out for ${duration} minutes.`);

    },

};