import { event, sendAngryMessage, sendHappyMessage } from '../utils';
import { GuildMember, TextChannel } from 'discord.js';
import keys from '../keys';

const LOL_PLAYER_ROLE = keys.roleID;
const CHANNEL_ID = keys.channelID;

export default event('presenceUpdate', ({ log }, oldPresence, newPresence) => {
  const member = newPresence.member as GuildMember;
  const userPing = member?.user.toString();
  const username = member?.user.username;
  const channel = member?.guild.channels.cache.get(CHANNEL_ID) as TextChannel;

  const isPlayingLol = newPresence?.activities.some(
    activity => activity.name === 'League of Legends'
  );
  const hasLolPlayerRole = member?.roles.cache.has(LOL_PLAYER_ROLE);

  if (isPlayingLol && !hasLolPlayerRole) {
    // Add role to Lol players
    member?.roles.add(LOL_PLAYER_ROLE).catch(console.error);
    sendAngryMessage(channel, userPing);
    log(`${username} is playing League of Legends...`);
  } else {
    if (hasLolPlayerRole) {
      // Remove role once he/she stops playing lol
      member?.roles.remove(LOL_PLAYER_ROLE).catch(console.error);
      sendHappyMessage(channel, userPing);
      log(`${username} QUIT playing League of Legends...`);
    }
  }
});
