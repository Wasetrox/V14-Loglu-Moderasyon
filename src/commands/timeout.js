const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionsBitField } = require('discord.js'); // PermissionsBitField'ı içe aktarın

module.exports = {

    data: new SlashCommandBuilder()

        .setName('zaman-asimi')

        .setDescription('Bir kullanıcıyı zaman aşımına sokar.')

        .addUserOption(option =>

            option.setName('hedef')

                .setDescription('Zaman aşımına sokulacak kullanıcı')

                .setRequired(true))

        .addIntegerOption(option =>

            option.setName('sure')

                .setDescription('Zaman aşımı süresi (dakika olarak)')

                .setRequired(true)),

    async execute(interaction) {

        // Zaman aşımı yetkisi olan kullanıcılar
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ModerateMembers)) {
            return interaction.reply('Bu komutu kullanma yetkiniz yok.');
        }

        const hedef = interaction.options.getUser('hedef');

        const uye = interaction.guild.members.cache.get(hedef.id);

        const sure = interaction.options.getInteger('sure');

        if (!uye) return interaction.reply('Kullanıcı bulunamadı.');

        await uye.timeout(sure * 60 * 1000); // Milisaniyeye çevirme

        await interaction.reply(`${hedef.tag} ${sure} dakika süreyle zaman aşımına sokuldu.`);

    },

};
