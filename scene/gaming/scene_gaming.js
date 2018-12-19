class Scene_gaming extends Scene {
    constructor(game) {
        // 存下 game
        super(game)
        this.setup()
        this.setupInputs()
    }

    setup() {
        this.sky = JoeImage.new(this.game, 'sky')
        this.player = new Player(this.game)
        this.player.x = 100
        this.player.y = 100

        this.addElement(this.sky)
        this.addElement(this.player)
    }

    setupInputs() {
        // 这里也有 this 会指向 window 的陷阱
        var s = this
        this.game.registerAction('w', function() {
            s.player.moveUp()
        })
        this.game.registerAction('s', function() {
            s.player.moveDown()
        })
        this.game.registerAction('a', function() {
            s.player.moveLeft()
        })
        this.game.registerAction('d', function() {
            s.player.moveRight()
        })
    }

}

