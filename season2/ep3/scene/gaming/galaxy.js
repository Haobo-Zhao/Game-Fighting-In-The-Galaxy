class Galaxy extends Element {
    constructor(game) {
        super(game, 'galaxy')
        this.init()
    }

    init() {
        this.x = randomBetween(-1000, 600)
        this.y = -randomBetween(900, 1000)
        this.speed = randomBetween(1, 3)
    }

    update() {
        if (this.y >= 900) {
            this.init()
        }
        this.y += this.speed
    }

    debug() {
        this.speed = config.galaxy_speed
    }
}