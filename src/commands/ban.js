const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

    data: new SlashCommandBuilder()

        .setName('ban')

        .setDescription('Bans a user from the server.')

        .addUserOption(option =>

            option.setName('target')

                .setDescription('The user to ban')

                .setRequired(true)),

    async execute(interaction) {

        const target = interaction.options.getUser('target');

        const member = interaction.guild.members.cache.get(target.id);

        if (!member) return interaction.reply('User not found.');

        await member.ban();

        await interaction.reply(`${target.tag} has been banned.`);

    },

};