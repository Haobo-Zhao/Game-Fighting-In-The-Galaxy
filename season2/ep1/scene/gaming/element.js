class Element {
    constructor(game, name, x, y) {
        this.texture = game.textureByName(name)
        this.x = x || 0
        this.y = y || 0
    }

    // static  函数的 this， 是绑定在调用 static 函数的类，身上的
    static new(game, name, x, y) {
        this.i = this.i || new this(game, name, x, y)
        this.i.init()
        return this.i
    }

    init() {

    }
}
