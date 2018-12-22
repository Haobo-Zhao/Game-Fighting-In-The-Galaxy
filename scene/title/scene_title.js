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
        this.game.registerAction('a', function() {
            self.ninja.move(-10)
        })
        this.game.registerAction('d', function() {
            self.ninja.move(10)
        })
    }
}
