import { RpgPlayer, RpgPlayerHooks } from '@rpgjs/server';

export const player: RpgPlayerHooks = {
  async onConnected(player: RpgPlayer) {
    player.setGraphic('hero');
    player.setHitbox(8, 8);
    await player.changeMap('medieval', {
      x: 200,
      y: 100,
    });
  },
  // GOOD PRACTICE
  onJoinMap(player: RpgPlayer) {
    player.hp = 500;
  },

  onInput(player: RpgPlayer, data: { input: any }) {
    if (data.input == 'action') {
      player.playSound('hit');
      player.showAnimation('herohit', 'default', true);
    }
  },
};
