class Player extends JoeImage {
    constructor(game) {
        // super 里面默认 x y 都是 0
        super(game, 'player')
        this.setup()
    }

    setup() {
        this.x = 300 - this.w / 2
        this.y = 800 - this.h - 20
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
            this.cooldown = 10
            // 这里的子弹冷却时间如果加在 debug 里面，会因为 debug 在 update 之前先执行
            if (this.scene.debugModeEnabled) {
                this.cooldown = config.cooldown
            }
            var b = Bullet.new(this.game)
            // 射出子弹的位置
            b.x = this.w / 2 + this.x
            b.y = this.y + 2
            this.scene.addElement(b)
        }
    }

    update() {
        this.cooldown--
        if (this.cooldown < 0) {
            this.cooldown = 0
        }
    }

    debug() {
        this.speed = config.player_speed
    }
}
