import { event, sendAngryMessage, sendHappyMessage } from '../utils';
import { GuildMember, TextChannel } from 'discord.js';
import keys from '../keys';

const LOL_PLAYER_ROLE = keys.roleID;
const CHANNEL_ID = keys.channelID;

export default event('presenceUpdate', async ({ log }, oldPresence, newPresence) => {
  const member = newPresence.member as GuildMember;
  const userPing = member?.user.toString();
  const username = member?.user.username;
  const channel = member?.guild.channels.cache.get(CHANNEL_ID) as TextChannel;

  const isPlayingLol = newPresence?.activities.some(
    activity => activity.name === 'League of Legends'
  );
  const hasLolPlayerRole = member?.roles.cache.has(LOL_PLAYER_ROLE);

  if (isPlayingLol && !hasLolPlayerRole) {
    try {
      await member?.roles.add(LOL_PLAYER_ROLE);
      await sendAngryMessage(channel, userPing);
      log(`${username} is playing League of Legends...`);
    } catch (error) {
      console.error(`Error adding role to ${username}: ${error}`);
    }
  } else if (!isPlayingLol && hasLolPlayerRole) {
    try {
      await member?.roles.remove(LOL_PLAYER_ROLE);
      await sendHappyMessage(channel, userPing);
      log(`${username} QUIT playing League of Legends...`);
    } catch (error) {
      console.error(`Error removing role from ${username}: ${error}`);
    }
  }
});
