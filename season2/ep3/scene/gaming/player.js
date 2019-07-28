class Player extends Element {
    constructor(game, x, y) {
        super(game, 'player', x, y)

        this.init(x, y)
    }

    init(x, y) {
        this.x = x || 100
        this.y = y || 200
        this.speed = 15
        this.cooldown = 0
    }

    //  由 Player 来控制开火，而不是场景，提高内聚
    fire() {
        if (this.cooldown == 0) {
            const x = this.x + this.w / 2
            const y = this.y - 5
            const b = Bullet.new(this.game, x, y)
            this.scene.addElement(b)
            this.cooldown = 5
            if (this.game.debugMode) {
                this.cooldown = config.cooldown
            }
        }
    }

    update() {
        this.cooldown = Math.max(0, this.cooldown - 1)
    }

    debug() {
        this.speed = config.player_speed
    }

    moveUp() {
        this.y = clamp(this.y - this.speed, 0, 900 - this.h)
    }

    moveDown() {
        this.y = clamp(this.y + this.speed, 0, 900 - this.h)
    }

    moveLeft() {
        this.x = clamp(this.x - this.speed, 0, 800 - this.w)
    }

    moveRight() {
        this.x = clamp(this.x + this.speed, 0, 800 - this.w)
    }
}
