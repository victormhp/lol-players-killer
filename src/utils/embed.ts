import { EmbedBuilder, AttachmentBuilder, TextChannel } from 'discord.js';
import { resolve } from 'path';

const imagesPath = resolve(__dirname, '../assets');

export function sendAngryMessage(channel: TextChannel, username: string) {
  const image = new AttachmentBuilder(`${imagesPath}/angry.png`);

  const embed = new EmbedBuilder()
    .setColor('#EC062D')
    .setTitle('DECEPCIÓN, DESGRACIA Y DESHONRA')
    .setThumbnail('attachment://angry.png')
    .setDescription(`${username} ME DAS PUTO ASCO MALDITO LOL PLAYER...`)
    .setImage('attachment://angry.png')
    .setTimestamp()
    .setFooter({
      text: 'Arderás en el infierno por tus pecados...',
      iconURL: 'attachment://angry.png',
    });
  channel?.send({ embeds: [embed], files: [image] }).catch(console.error);
}

export function sendHappyMessage(channel: TextChannel, username: string) {
  const image = new AttachmentBuilder(`${imagesPath}/creepy.png`);

  const embed = new EmbedBuilder()
    .setColor('#F9FF99')
    .setTitle('REDENCIÓN, LIBERACIÓN Y RESCATE')
    .setThumbnail('attachment://creepy.png')
    .setDescription(`¡${username} ME ALEGRA VER QUE ABRES LOS OJOS!`)
    .setImage('attachment://creepy.png')
    .setTimestamp()
    .setFooter({
      text: '¡Bienvenido al reino de Dios hermane!',
      iconURL: 'attachment://creepy.png',
    });
  channel?.send({ embeds: [embed], files: [image] }).catch(console.error);
}
