class Enemy extends Element {
    constructor(game, x, y) {
        const type = randomBetween(1, 3)
        const name =  `enemy${type}`
        super(game, name)
        this.init()
    }

    init() {
        this.x = randomBetween(100, 700)
        this.y = -randomBetween(100, 200)
        this.speed = randomBetween(5, 10)
    }

    update() {
        if (this.y >= 1000) {
            this.init()
        }
        this.y += this.speed
    }
}