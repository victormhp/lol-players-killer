import { Keys } from '../types';

const keys: Keys = {
  clientToken: process.env.CLIENT_TOKEN ?? 'nil',
  roleID: process.env.LOL_PLAYER_ROL_ID ?? 'nil',
  channelID: process.env.CHANNEL_ID ?? 'nil',
};

if (Object.values(keys).includes('nil')) {
  throw new Error('Not all ENV variables are defined');
}

export default keys;
