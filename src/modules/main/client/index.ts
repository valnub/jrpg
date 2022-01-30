import { RpgClient, RpgModule } from '@rpgjs/client';
import { Tilesets } from './maps/medieval';
import { HeroCharacter } from './characters/hero';
import { SideChar } from './characters/sidechar';

@RpgModule<RpgClient>({
  spritesheets: [Tilesets, HeroCharacter, SideChar],
})
export default class RpgClientEngine {}
