class Boot extends Phaser.State {
    preload() {
        game.load.image("candy", "img/candy.png")
    }

    create() {
        candy = game.add.sprite(0, 0, "candy")
        candy.setAnchorTo(0.5, 0.5)
    }
}

export default Boot