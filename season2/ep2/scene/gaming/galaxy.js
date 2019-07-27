class Galaxy extends Element {
    constructor(game, x, y) {
        super(game, 'galaxy')
        this.init()
    }

    init() {
        this.x = randomBetween(-600, 600)
        this.y = -randomBetween(900, 1000)
        this.speed = randomBetween(1, 3)
    }

    update() {
        if (this.y >= 1000) {
            this.init()
        }
        this.y += this.speed
    }
}