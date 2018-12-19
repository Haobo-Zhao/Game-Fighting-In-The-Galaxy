class Player extends JoeImage {
    constructor(game) {
        // super 里面默认 x y 都是 0
        super(game, 'player')
        this.speed = 10
    }

    moveLeft() {
        this.x -= this.speed
    }
    moveRight() {
        this.x += this.speed
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }
}
