const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');
const path = require('path');
const { PermissionsBitField } = require('discord.js'); // PermissionsBitField'ı içe aktarın

module.exports = {
    data: new SlashCommandBuilder()
        .setName('filtre')
        .setDescription('Küfür ve reklam filtrelerini yönet.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('kufur')
                .setDescription('Küfür filtresini etkinleştir veya devre dışı bırak.')
                .addStringOption(option =>
                    option.setName('islem')
                        .setDescription('Etkinleştir veya devre dışı bırak')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Etkinleştir', value: 'enable' },
                            { name: 'Devre dışı bırak', value: 'disable' }
                        )))
        .addSubcommand(subcommand =>
            subcommand
                .setName('reklam')
                .setDescription('Reklam filtresini etkinleştir veya devre dışı bırak.')
                .addStringOption(option =>
                    option.setName('islem')
                        .setDescription('Etkinleştir veya devre dışı bırak')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Etkinleştir', value: 'enable' },
                            { name: 'Devre dışı bırak', value: 'disable' }
                        ))),
    async execute(interaction) {
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
            return await interaction.reply('Bu komutu kullanmak için yönetici yetkisine sahip olmalısınız.');
        }

        const action = interaction.options.getString('islem');
        const subcommand = interaction.options.getSubcommand();

        let config = require('../../config.json');

        if (subcommand === 'kufur') {
            config.swearFilter = action === 'enable';
        } else if (subcommand === 'reklam') {
            config.adFilter = action === 'enable';
        }

        fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));

        await interaction.reply(`${subcommand} filtresi artık ${action} edildi.`);
    },
};
