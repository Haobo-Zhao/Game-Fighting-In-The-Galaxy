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

    clearElements() {
        this.elements = []
    }

    addElement(e) {
        this.elemenets.push(e)
    }

    // purposefully empty currently
    update() {

    }

    draw() {
        for (const e of this.elemenets) {
            this.game.drawElement(e)
        }
    }
}
