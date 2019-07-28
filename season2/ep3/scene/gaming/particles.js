class ParticleSystem {
    constructor(game, x, y) {
        this.game = game
        this.x = x
        this.y = y
        this.alive = true
        this.duration = 25
        this.numberOfParticles = 5
        this.createdParticles = 0
        this.particles = []
    }

    static new(game, x, y) {
        return new this(game, x, y)
    }

    update() {
        if (!this.alive) {
            return
        }

        if (this.createdParticles < this.numberOfParticles) {
            const p = Particle.new(this.game, this.x, this.y)
            // this.createdParticles += 1
            this.particles.push(p)
        }

        for (const p of this.particles) {
            p.update()
        }

        this.particles = this.particles.filter(p => p.alive)

        this.duration -= 1
        if (this.duration <= 0) {
            // this.alive = false
        }
    }

    draw() {
        if (!this.alive) {
            return
        }
        for (let p of this.particles) {
            if (p.alive) {
                p.draw()
            }
        }
    }
}