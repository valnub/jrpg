import { RpgClient, RpgModule } from '@rpgjs/client';
import { Tilesets } from './maps/medieval';
import { HeroCharacter } from './characters/hero';

@RpgModule<RpgClient>({
  spritesheets: [Tilesets, HeroCharacter],
})
export default class RpgClientEngine {}
