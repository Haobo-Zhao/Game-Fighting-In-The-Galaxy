class Animation {
    constructor(game, name) {
        this.game = game
        // this.textures 里面装的是 
        this.textures = []
        for (let i = 0; i <= 9; i++) {
            // let animationName = name + i
            let animationName = `${name}${i}`
            let frame = game.imageByName(animationName)
            this.textures.push(frame)
        }
        this.setup()
    }

    static new(game, name) {
        return new this(game, name)
    }

    setup() {
        this.x = 100
        this.y = 20
        this.cooldown = 3
        this.textureIndex = 0
        this.texture = this.textures[0]
    }

    update() {
        this.cooldown--
        if (this.cooldown === 0) {
            this.cooldown = 3
            this.textureIndex = (this.textureIndex + 1) % this.textures.length
            this.texture = this.getFrame()
        }
    }

    draw() {
        this.game.drawImage(this)
    }

    getFrame() {
        return this.textures[this.textureIndex]
    }
}