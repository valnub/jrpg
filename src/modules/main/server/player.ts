import { RpgPlayer, RpgPlayerHooks } from '@rpgjs/server';

export const player: RpgPlayerHooks = {
  async onConnected(player: RpgPlayer) {
    player.setGraphic('hero');
    await player.changeMap('medieval', {
      x: 200,
      y: 100,
    });
  },
  // GOOD PRACTICE
  onJoinMap(player: RpgPlayer) {
    player.hp = 500;
  },
};
