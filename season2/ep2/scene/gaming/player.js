class Player extends Element {
    constructor(game, x, y) {
        super(game, 'player', x, y)

        this.init(x, y)
    }

    init(x, y) {
        this.x = x || 100
        this.y = y || 200
        this.speed = 10
    }

    fire() {
        const x = this.x + this.w / 2
        const y = this.y - 2
        const b = Bullet.new(this.game, x, y)
        this.scene.addElement(b)
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
