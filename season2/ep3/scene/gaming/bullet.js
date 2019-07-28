class Bullet extends Element {
    constructor(game, x, y) {
        super(game, 'bullet')
        this.init(x, y)
    }

    init(x, y) {
        this.x = x || 100
        this.y = y || 100
        this.speed = 10
        if (this.game.debugMode) {
            this.speed = config.bullet_speed
        }
    }

    update() {
        this.y -= this.speed
    }
}
