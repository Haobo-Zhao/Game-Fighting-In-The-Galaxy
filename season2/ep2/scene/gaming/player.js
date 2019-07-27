class Player extends Element {
    constructor(game, x, y) {
        super(game, 'player', x, y)

        this.init(x, y)
    }

    init(x, y) {
        this.x = x || 100
        this.y = y || 200
        this.speed = 10
        this.cooldown = 0
    }

    //  由 Player 来控制开火，而不是场景，提高内聚
    fire() {
        if (this.cooldown == 0) {
            const x = this.x + this.w / 2
            const y = this.y - 5
            const b = Bullet.new(this.game, x, y)
            this.scene.addElement(b)
            this.cooldown = 3
        }
    }

    update() {
        this.cooldown = Math.max(0, this.cooldown - 1)
    }

    moveUp() {
        this.y -= this.speed
    }

    moveDown() {
        this.y += this.speed
    }

    moveLeft() {
        this.x -= this.speed
    }

    moveRight() {
        this.x += this.speed
    }
}
