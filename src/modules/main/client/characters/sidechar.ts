import { Spritesheet, Animation, Direction } from '@rpgjs/client';

const frameY = (direction) => {
  return {
    [Direction.Down]: 0,
    [Direction.Left]: 1,
    [Direction.Right]: 2,
    [Direction.Up]: 3,
  }[direction];
};

@Spritesheet({
  id: 'sidechar', // id (mandatory)
  image: require('./assets/sidechar.png'), // relative path of image
  framesWidth: 3, // number of frames of the image across the width
  framesHeight: 4, // number of frames of the image across the height
  width: 46, // width of image
  height: 64, // height of image
  textures: {
    [Animation.Stand]: {
      animations: (direction) => [
        [{ time: 0, frameX: 1, frameY: frameY(direction) }],
      ],
    },
    [Animation.Walk]: {
      animations: (direction) => [
        [
          { time: 0, frameX: 0, frameY: frameY(direction) },
          { time: 10, frameX: 1, frameY: frameY(direction) },
          { time: 20, frameX: 2, frameY: frameY(direction) },
        ],
      ],
    },
  },
})
export class SideChar {}
