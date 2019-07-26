class Player extends Element {
    constructor(game, x, y) {
        super(game, 'player', x, y)
        this.init()
    }

    static new(game, x, y) {
        this.i = this.i || new this(game, x, y)
        return i
    }

    init() {
        this.x = 100
        this.y = 200
        this.speed = 10
    }

    moveByX(dx) {
        dx = dx || 0
        this.x += dx
    }

    moveByY(dy) {
        dy = dy || 0
        this.y += dy
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
