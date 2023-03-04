import { event, sendAngryMessage, sendHappyMessage } from '../utils';
import { TextChannel } from 'discord.js';
import keys from '../keys';

const LOL_PLAYER_ROLE = keys.roleID;
const CHANNEL_ID = keys.channelID;

export default event('presenceUpdate', ({ log }, oldPresence, newPresence) => {
  const member = newPresence.member;
  const username = member?.user?.username as string;
  const channel = member?.guild.channels.cache.get(CHANNEL_ID) as TextChannel;

  const isPlayingLol = newPresence?.activities.some(
    activity => activity.name === 'League of Legends'
  );
  const hasLolPlayerRole = member?.roles.cache.has(LOL_PLAYER_ROLE);

  if (isPlayingLol) {
    // Add role to Lol players
    member?.roles.add(LOL_PLAYER_ROLE).catch(console.error);
    sendAngryMessage(channel, username);
    log(`${username} is playing League of Legends...`);
  } else {
    if (hasLolPlayerRole) {
      // Remove role once he/she stops playing lol
      member?.roles.remove(LOL_PLAYER_ROLE).catch(console.error);
      sendHappyMessage(channel, username);
      log(`${username} QUIT playing League of Legends...`);
    }
  }
});
