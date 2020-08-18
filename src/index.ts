import '@geckos.io/phaser-on-nodejs';
import * as Phaser from 'phaser';
import { TestScene } from './scenes/testScene';

global.phaserOnNodeFPS = 30;

new Phaser.Game({
    type: Phaser.HEADLESS,
    height: 800,
    width: 600,
    scene: [ new TestScene() ],
    parent: 'gameContainer',
    physics: {
      default: 'arcade',
    },
    dom: {
      createContainer: true,
    },
  })