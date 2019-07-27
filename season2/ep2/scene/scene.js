class Scene {
    constructor(game) {
        this.game = game
        this.init()
    }

    static new(game) {
        return new this(game)
    }

    static instance(game) {
        // 单例存在的时候，再去初始化，因为如果是新创建的话，会在创建的过程里面，初始化
        this.i && this.i.init()
        this.i = this.i || new this(game)
        return this.i
    }

    init() {
        this.elements = []
    }

    clearElements() {
        this.elements = []
    }

    addElement(e) {
        // 元素拿到场景
        e.scene = this
        this.elements.push(e)
    }

    // purposefully empty currently
    update() {
        for (let i = 0; i < this.elements.length; i++) {
            const e = this.elements[i]
            e.update && e.update()
        }
    }

    draw() {
        const g = this.game
        for (let i = 0; i < this.elements.length; i++) {
            const e = this.elements[i]
            g.drawElement(e)
        }
    }
}
