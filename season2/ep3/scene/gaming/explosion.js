// 也可以抽象成一个 sprite 类
class Explosion extends Element {
    constructor(game, x, y) {
        super(game, 'explosion', x, y)
        this.alive = true
        this.dx = 0
        this.framesToSwitch = 2
        this.leftFrames = this.framesToSwitch
    }

    static new(game, x, y) {
        return new this(game, x, y)
    }

    draw() {
        if (!this.alive) {
            return
        }
        const h = this.h
        this.game.context.drawImage(
            this.texture,
            this.dx, 0, h, h,
            this.x, this.y, h, h
        )
    }

    update() {
        this.leftFrames -= 1
        if (this.leftFrames == 0) {
            this.leftFrames = this.framesToSwitch
            this.dx += 896 / 14
            this.dx %= 896
            // if (this.dx >= 896) {
                // this.alive = false
            // }
        }
    }
}
