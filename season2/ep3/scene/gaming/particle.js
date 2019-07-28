class Particle extends Element {
    constructor(game, x, y) {
        super(game, 'particle', x, y)
        this.init()
    }

    init() {
        const radian = randomBetween(0, 2 * Math.PI)
        this.alive = true
        this.duration = 10
        this.vx = 5 * Math.sin(radian)
        this.vy = 5 * Math.cos(radian)
    }

    move() {
        this.x += this.vx
        this.vx *= 0.8

        this.y += this.vy
        this.vy *= 0.8
    }

    static new(game, x, y) {
        return new this(game, x, y)
    }

    update() {
        if (!this.alive) {
            return
        }

        this.move()

        this.duration -= 1
        if (this.duration <= 0) {
            this.alive = false
        }
    }
}