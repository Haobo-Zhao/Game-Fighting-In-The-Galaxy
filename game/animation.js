class Animation {
    constructor(game, name) {
        this.game = game
        // this.textures 里面装的是一个 HTMLImageElement，就是可以直接画出来的东西
        this.textures = []
        for (let i = 0; i <= 9; i++) {
            let animationName = name + i
            let texture = game.imageByName(animationName)
            this.textures.push(texture)
        }
        
        this.init()
    }

    static new(game, name) {
        return new this(game, name)
    }

    init() {
        this.x = 200
        this.y = 200
        this.cooldown = 3
        this.textureIndex = 0
        this.texture = this.textures[0]
    }

    move(dx) {
        this.x += dx
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