import { Sound } from '@rpgjs/client';

@Sound({
  sounds: {
    hit: require('./assets/hit.wav'),
  },
  loop: false,
})
export class Sounds {}
