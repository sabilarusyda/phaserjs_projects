/**
 * Author: Sabila Rusyda
 */
import Phaser from 'phaser';

// Create configuration object
const config = {
  type: Phaser.AUTO, // WebGL (Web Graphics Library) JS Api for rendering 2D and 3D graphics
  width: 800,
  height: 600,
  physics: {
    default: 'arcade', // Arcade physics plugin, manages physics simulation
  },
  // If you don't use custom function name, you can just write it like this "scene: {preload, create}"
  scene: {
    preload: srpreload,
    create: srcreate,
  }
}

let bird = null;

// Loading assets, such as images, music, animations, etc
function srpreload() {
  // 'this' context - scene, it contains functions and properties we can use
  this.load.image('srsky', 'assets/sky.png');
  this.load.image('srbird', 'assets/bird.png');
}

function srcreate() {
  // ============================
  // Setup Background Image
  // ----------------------------

  // A. Add image to the canvas - x, y, key of the image
  // this.add.image(0, 0, 'srsky');

  // B. Move image to the middle of the canvas using image's width and height - x:400, y:300
  // this.add.image(config.width/2, config.height/2, 'srsky');

  // C. Move image to the middle of the canvas
  // C.01 - By default, the origin point of the middle of the image is '0.5,0.5', it will be shown like A.
  // this.add.image(0, 0, 'srsky').setOrigin(0.5, 0.5);
  // C.02 - You can use width & height calculation to make it centered, but why would you...
  // this.add.image(400, 300, 'srsky').setOrigin(0.5, 0.5);
  // C.03 - This is the cleanest way
  // this.add.image(0, 0, 'srsky').setOrigin(0, 0);
  this.add.image(0, 0, 'srsky').setOrigin(0);

  // ============================
  // Setup Bird Object
  // ----------------------------
  
  // A. Add bird in the middle of the canvas
  // this.add.sprite(config.width/2, config.height/2, 'srbird').setOrigin(0);

  // B. Move bird to the left, around 1/10 of the width
  // B.01 - You can use math like 'X / 10' or 'X * 0.1'
  // bird = this.add.sprite(config.width*0.1, config.height/2, 'srbird').setOrigin(0);
  // B.02 - If we add Sprite without 'physics', 'bird.body' will return NULL
  // console.log(bird.body);
  // B.03 - Apply 'physics'
  bird = this.physics.add.sprite(config.width*0.1, config.height/2, 'srbird').setOrigin(0);
  // console.log(bird.body);

  // C. Apply gravity
  // bird.body.gravity.y = 200; // 200 pixels per second, higher value will pull the object down faster

  // D. Apply velocity - distance over time
  bird.body.velocity.y = 200;

  debugger
}

// Instantiates a Phaser Game
new Phaser.Game(config);
