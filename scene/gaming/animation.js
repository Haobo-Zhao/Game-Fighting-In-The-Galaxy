class Animation {
    constructor(game, name) {
        this.game = game
        // this.frames 里面装的是 
        this.frames = []
        for (let i = 0; i <= 9; i++) {
            let animationName = name + i
            let frame = {}
            frame.texture = game.imageByName(animationName)
            frame.x = this.x
            frame.y = this.y
            this.frames.push(frame)
        }
        this.setup()
    }

    static new(game, name) {
        return new this(game, name)
    }

    setup() {
        // 用动画这个类的 x 和 y，去给每一个 frame 的图像定位
        this.x = 100
        this.y = 20
        this.cooldown = 12
        this.frameIndex = 0
        this.frame = this.frames[0]
        this.setupFrame()
        
    }

    setupFrame() {
        // frame 的位置由 animation 的位置来决定
        this.frame.x = this.x
        this.frame.y = this.y
        this.w = this.frame.width
        this.h = this.frame.height
    }

    update() {
        this.cooldown--
        if (this.cooldown === 0) {
            this.cooldown = 12
            this.frameIndex = (this.frameIndex + 1) % this.frames.length
            this.frame = this.getFrame()
            this.setupFrame()
        }
    }

    draw() {
        this.game.drawImage(this.frame)
    }

    getFrame() {
        return this.frames[this.frameIndex]
    }
}