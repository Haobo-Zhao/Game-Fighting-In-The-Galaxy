class Player extends Element {
    constructor(game, x, y) {
        super(game, 'player', x, y)
        this.init()
    }

    static new(game, x, y) {
        this.i = this.i || new this(game, x, y)
        return this.i
    }

    init() {
        this.x = 100
        this.y = 200
        this.speed = 10
    }

    moveByX(dx) {
        dx = dx || 0
        this.x = clamp(this.x + dx, 0, 400 - this.w)
    }

    moveByY(dy) {
        dy = dy || 0
        this.y = clamp(this.y + dy, 0, 300 - this.h)
    }

    moveUp() {
        this.moveByY(-this.speed)
    }

    moveDown() {
        this.moveByY(this.speed)
    }

    moveLeft() {
        this.moveByX(-this.speed)
    }

    moveRight() {
        this.moveByX(this.speed)
    }
}
