class Scene {
    constructor(game) {
        this.game = game
        this.init()
    }

    static new(game) {
        return new this(game)
    }

    static instance(game) {
        this.i = this.i || new this(game)
        this.i.init()
        return this.i
    }

    init() {
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
