class Scene_title extends Scene {
    constructor(game) {
        super(game)
        var ps = ParticleSystem.new(game)
        ps.setup(200, 200)
        this.addElement(ps)
    }
}