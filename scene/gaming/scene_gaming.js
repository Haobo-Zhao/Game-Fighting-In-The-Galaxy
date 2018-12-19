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
        
        // 背景图总是优先放，不然会覆盖其他的图
        this.addElement(this.sky)
        
        this.numberOfEnemies = 10
        this.addEnemies()
        
        this.addElement(this.player)
    }

    update() {
        super.update()
    }

    addEnemies() {
        this.enemies = []
        for (let i = 0; i < this.numberOfEnemies; i++) {
            let e = Enemy.new(this.game)
            this.enemies.push(e)
            this.elements.push(e)
        }
    }

    setupInputs() {
        // 这里也有 this 会指向 window 的陷阱
        var s = this
        this.game.registerAction('w', function () {
            s.player.moveUp()
        })
        this.game.registerAction('s', function () {
            s.player.moveDown()
        })
        this.game.registerAction('a', function () {
            s.player.moveLeft()
        })
        this.game.registerAction('d', function () {
            s.player.moveRight()
        })
        this.game.registerAction(' ', function() {
            s.player.fire()
        })
    }
}

