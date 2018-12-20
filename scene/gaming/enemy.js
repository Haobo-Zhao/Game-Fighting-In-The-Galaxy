class Enemy extends JoeImage {
    constructor(game) {
        var type = randomBetween(1, 3)
        var name = 'enemy' + type
        super(game, name)
        this.init()
    }

    init() {
        this.speed = randomBetween(1, 3)
        this.additional_speed = 0
        this.x = randomBetween(0, 530)
        this.y = - randomBetween(0, 100)
    }

    update() {
        this.moveDown()
        if (this.y > this.game.canvas.height) {
            this.init()
        }
    }

    moveDown() {
        this.y += this.speed + this.additional_speed
    }

    static new(game) {
        var i = new this(game)
        return i
    }

    debug() {
        this.additional_speed = config.additional_enemy_speed
    }
}