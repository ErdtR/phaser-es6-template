import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';
import Boot from "./states/Boot";


class Game extends Phaser.Game {
    constructor() {
        super(800, 600, Phaser.AUTO)
        this.state.add("Boot", Boot)

        this.state.start("Boot")
    }
}

new Game();