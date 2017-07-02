import CandyImg from "../img/candy.png"

class Boot extends Phaser.State {
    preload() {
        this.game.load.image("candy", CandyImg)
    }

    create() {
        this.candy = this.game.add.sprite(0, 0, "candy")
        this.candy.anchor.setTo(0.5, 0.5)
        console.log("added")
    }
}

export default Boot