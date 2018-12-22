class Ninja {
    constructor(game) {
        this.game = game
        this.init()
    }

    static new(game) {
        return new this(game)
    }

    init() {
        this.x = 200
        this.y = 200
        this.animations = {
            idle: Animation.new(this.game, 'idle'),
            run: Animation.new(this.game, 'run'),
        }

        this.status = 'idle'
        this.setAnimation()
    }

    setAnimation() {
        this.animation = this.animations[this.status]
        this.setAnimationPosition()
    }

    setAnimationPosition() {
        this.animation.x = this.x
        this.animation.y = this.y
    }

    update() {
        if (this.game.keydowns['a'] === false && this.game.keydowns['d'] === false) {
            this.status = 'idle'
            this.setAnimation()
        }
        this.animation.update()
    }

    draw() {
        this.animation.draw()
    }

    move(dx) {
        this.x += dx
        this.status = 'run'
        this.setAnimation()
    }
}