import { Keys } from '../types';

const keys: Keys = {
  clientToken: process.env.CLIENT_TOKEN ?? 'nil',
  lolPlayerRoleID: process.env.LOL_PLAYER_ROL_ID ?? 'nil',
  generalChannelID: process.env.GENERAL_CHANNEL_ID ?? 'nil',
};

if (Object.values(keys).includes('nil')) {
  throw new Error('Not all ENV variables are defined');
}

export default keys;
