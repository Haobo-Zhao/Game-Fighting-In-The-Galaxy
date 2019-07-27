class Scene {
    constructor(game) {
        log('3 Scene constructor()')
        this.game = game
        log('4 start calling init() on Scene\'s instance')
        this.init()
    }

    static new(game) {
        return new this(game)
    }

    static instance(game) {
        // 单例存在的时候，再去初始化，因为如果是新创建的话，会在创建的过程里面，初始化
        this.i && this.i.init()
        log('1 static Scene.instance()')
        this.i = this.i || new this(game)
        log('1 finished.')
        // 下面这一行，导致了这个耗费了数个小时来 debug 的问题
        // this.i.init()
        return this.i
    }

    init() {
        log('6 Scene instance init()')
        this.elements = []
    }

    clearElements() {
        this.elements = []
    }

    addElement(e) {
        this.elements.push(e)
    }

    // purposefully empty currently
    update() {

    }

    draw() {
        const g = this.game
        for (let i = 0; i < this.elements.length; i++) {
            const e = this.elements[i]
            g.drawElement(e)
        }
    }
}
