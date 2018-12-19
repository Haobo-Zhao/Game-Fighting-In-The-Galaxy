class Scene_gaming extends Scene {
    constructor(game) {
        // 存下 game
        super(game)
        this.init()
    }

    init() {
        this.sky = JoeImage.new(this.game, 'sky')
        this.player = JoeImage.new(this.game, 'player')
        this.player.x = 100
        this.player.y = 100

        this.addElement(this.sky)
        this.addElement(this.player)
    }
}

