// 也可以抽象成一个 sprite 类
class Explosion extends Element {
    constructor(game, x, y) {
        super(game, 'explosion', x, y)
        this.alive = true
        this.dx = 0
        this.framesToSwitch = 2
        this.leftFramesToSwitch = this.framesToSwitch
    }

    static new(game, x, y) {
        return new this(game, x, y)
    }

    update() {
        this.leftFramesToSwitch -= 1
        if (this.leftFramesToSwitch == 0) {
            this.leftFramesToSwitch = this.framesToSwitch
            this.dx += 896 / 14
            this.dx %= 896 + 64
            // if (this.dx >= 896) {
            // this.alive = false
            // }
        }
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
}
