class Scene_title extends Scene {
    constructor(game) {
        super(game)
        var ps = ParticleSystem.new(game)
        ps.setup(200, 200)
        this.addElement(ps)

        var ninja = Ninja.new(game, 'idle')
        this.ninja = ninja
        this.addElement(ninja)
        this.setupInputs()
    }

    setupInputs() {
        var self = this
        var ninja = this.ninja
        this.game.registerAction('a', function () {
            ninja.direction = 'left'
            self.ninja.move(-30)
        })
        this.game.registerAction('d', function () {
            ninja.direction = 'right'
            self.ninja.move(30)
        })
    }
}
