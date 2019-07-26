class Scene {
    constructor(game) {
        this.game = game
        this.elemenets = []
    }

    static new(game) {
        return new this(game)
    }

    static instance(game) {
        this.i = this.i || new this(game)
        return this.i
    }

    addElement(e) {
        this.elemenets.push(e)
    }

    // purposefully default update method to be empty
    update() {
        for (const e of this.elemenets) {
            e.update()
        }
    }
    // purposefully default draw method to be empty
    draw() {
        for (const e of this.elemenets) {
            this.game.drawElement(e)
        }
    }
}
