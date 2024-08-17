const { EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');
const config = require('../../config.json');

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        if (message.author.bot) return;

        const swearFilePath = path.join(__dirname, '../../kufur.txt');
        const swearWords = fs.readFileSync(swearFilePath, 'utf-8').split('\n').map(word => word.trim().toLowerCase());

        const adPatterns = [/discord\.gg\/\w+/, /http(s)?:\/\/\S+/]; // Reklam tespiti için regex

        let isSwear = false;
        let isAd = false;
        
        if (config.swearFilter) {
            isSwear = swearWords.includes(message.content.toLowerCase());
        }

        if (config.adFilter) {
            isAd = adPatterns.some(pattern => pattern.test(message.content.toLowerCase()));
        }
        if (isSwear || isAd) {
            await message.delete();
            const logChannel = message.guild.channels.cache.get(config.logChannelId);
            if (logChannel) {
                const embed = new EmbedBuilder()
                    .setTitle('Message Deleted')
                    .setDescription(`A message from ${message.author.tag} was deleted for containing ${isSwear ? 'swearing' : 'advertisement'}.`)
                    .addFields({ name: 'Content', value: message.content || 'No content' })
                    .setTimestamp();
                
                logChannel.send({ embeds: [embed] });
            }
        }
    },
};