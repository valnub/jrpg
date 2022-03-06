import { Sound } from '@rpgjs/client';

@Sound({
  sounds: {
    town: require('./assets/town.mp3'),
  },
  loop: true,
})
export class Music {}
