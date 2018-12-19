// 相当于每一个具体场景的父类，面向对象，为了复用的目的
class Scene {
    constructor(game) {
        this.game = game
        this.elements = []
    }

    addElement(e) {
        // e 是一个 JoeImage
        // 让 e 能够访问到所在的 scene
        e.scene = this
        this.elements.push(e)
    }

    update() {
        for (let i = 0; i < this.elements.length; i++) {
            let e = this.elements[i]
            e.update()
        }
    }

    draw() {
        for (let i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            this.game.drawImage(e)
        }
    }

    // 单例
    // 场景不需要一而再，再而三地去创造，不需要重复注册那些事件
    // 只需要去刷新场景里面的状态就可以了
    static new(game) {
        this.instance = this.instance || new this(game)
        return this.instance
    }
}