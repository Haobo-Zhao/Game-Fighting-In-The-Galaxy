class Image {
    constructor(game, name) {
        this.texture = game.imageByName(name)
        this.x = 0
        this.y = 0
    }

    static new(game, name) {
        var i = new this(game, name)
        return i
    }
}
