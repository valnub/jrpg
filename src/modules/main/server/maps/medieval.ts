import { RpgMap, MapData } from '@rpgjs/server';
import { WelcomeEvent } from '../events/welcome-event';

@MapData({
  id: 'medieval',
  file: require('./tmx/medieval.tmx'),
  name: 'Town', // optional
  events: [{ event: WelcomeEvent, x: 200, y: 60 }],
})
export class MedievalMap extends RpgMap {}
