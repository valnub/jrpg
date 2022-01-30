import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server';

@EventData({
  name: 'EV-1',
})
export class WelcomeEvent extends RpgEvent {
  onInit() {
    this.setGraphic('sidechar');
    this.setHitbox(8, 8);
  }

  async onAction(player: RpgPlayer) {
    if (player.getVariable('welcomed')) {
      player.showText("Oh, it is you again. What's up?");
      return;
    }
    await player.showText('Welcome to my little hometown!');
    player.setVariable('welcomed', true);
  }
}
