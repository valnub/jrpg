import { RpgMap, MapData } from '@rpgjs/server';

@MapData({
  id: 'medieval',
  file: require('./tmx/medieval.tmx'),
  name: 'Town', // optional
})
export class MedievalMap extends RpgMap {}
