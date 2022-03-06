import { RpgClient, RpgModule } from '@rpgjs/client';
import { Tilesets } from './maps/medieval';
import { HeroCharacter } from './characters/hero';
import { HeroHit } from './characters/herohit';
import { SideChar } from './characters/sidechar';
import { Music } from './music';
import { Sounds } from './sounds';

@RpgModule<RpgClient>({
  spritesheets: [Tilesets, HeroCharacter, SideChar, HeroHit],
  sounds: [Music, Sounds],
})
export default class RpgClientEngine {}
