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
        var ninja = this.ninja
        this.game.registerAction('a', function (keyStatus) {
            ninja.move(-1, keyStatus)
        })
        this.game.registerAction('d', function (keyStatus) {
            ninja.move(1, keyStatus)
        })
    }
}
