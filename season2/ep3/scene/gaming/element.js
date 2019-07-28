class Element {
    constructor(game, name, x, y) {
        this.game = game
        this.texture = game.textureByName(name)
        this.x = x || 0
        this.y = y || 0
        this.w = this.texture.width
        this.h = this.texture.height
    }

    // static  函数的 this， 是绑定在调用 static 函数的类，身上的
    static new(game, name, x, y) {
        return new this(game, name, x, y)
    }

    draw() {
        this.game.drawElement(this)
    }
}
