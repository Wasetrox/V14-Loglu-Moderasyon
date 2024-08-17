const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('filter')
        .setDescription('Manage swear and ad filters.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('swear')
                .setDescription('Enable or disable the swear filter.')
                .addStringOption(option =>
                    option.setName('action')
                        .setDescription('Enable or disable')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Enable', value: 'enable' },
                            { name: 'Disable', value: 'disable' }
                        )))
        .addSubcommand(subcommand =>
            subcommand
                .setName('ad')
                .setDescription('Enable or disable the ad filter.')
                .addStringOption(option =>
                    option.setName('action')
                        .setDescription('Enable or disable')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Enable', value: 'enable' },
                            { name: 'Disable', value: 'disable' }
                        ))),
    async execute(interaction) {
        const action = interaction.options.getString('action');
        const subcommand = interaction.options.getSubcommand();

        let config = require('../../config.json');

        if (subcommand === 'swear') {
            config.swearFilter = action === 'enable';
        } else if (subcommand === 'ad') {
            config.adFilter = action === 'enable';
        }

        fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));

        await interaction.reply(`${subcommand} filter is now ${action}d.`);
    },
};