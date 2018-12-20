class Bullet extends JoeImage {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }

    setup() {
        this.speed = 5
        // 在被创建的时候，子弹还没有被场景的 addElement 函数执行，所以子弹还没有 this.scene 这个东西
        // 需要通过迂回的办法，通过 game 来访问 scene
        if (this.game.scene.debugModeEnabled) {
            this.speed = config.bullet_speed
        }
    }

    // 如果 debug 的东西加在这里，那么已经射出去的子弹，速度也会被改变
    // 而放在 setup 里面，只会影响新生的子弹的速速
    update() {
        this.y -= this.speed
    }
}