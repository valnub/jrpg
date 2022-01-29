import { RpgServer, RpgModule } from '@rpgjs/server';
import { player } from './player';
import { MedievalMap } from './maps/medieval';

@RpgModule<RpgServer>({
  maps: [MedievalMap],
  player,
})
export default class RpgServerEngine {}
