class Player extends JoeImage {
    constructor(game) {
        // super 里面默认 x y 都是 0
        super(game, 'player')
        this.setup()
    }

    setup() {
        this.speed = 10
        this.cooldown = 0
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

    fire() {
        if (this.cooldown === 0) {
            this.cooldown = 5
            var b = Bullet.new(this.game)
            b.x = this.w / 2 + this.x
            b.y = this.y
            this.scene.addElement(b)
        }
    }

    update() {
        this.cooldown--
        if (this.cooldown < 0) {
            this.cooldown = 0
        }
    }
}
