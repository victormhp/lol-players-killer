import { Event } from '../types';
import ready from './ready';
import presenceUpdate from './presence';

const events: Event<any>[] = [ready, presenceUpdate];

export default events;
