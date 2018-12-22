class Ninja {
    constructor(game) {
        this.game = game
        this.init()
    }

    static new(game) {
        return new this(game)
    }

    init() {
        this.x = 200
        this.y = 200
        this.speed = 30
        this.direction = 'right'
        this.animations = {
            idle: Animation.new(this.game, 'idle'),
            run: Animation.new(this.game, 'run'),
        }

        this.status = 'idle'
        this.setAnimation()
    }

    setAnimation() {
        this.animation = this.animations[this.status]
        this.setAnimationPosition()
    }

    setAnimationPosition() {
        this.animation.x = this.x
        this.animation.y = this.y
    }

    update() {
        this.animation.update()
    }

    draw() {
        if (this.direction === 'left') {
            this.animation.drawLeftwards()
            return
        }
        this.animation.draw()
    }

    move(direction, keyStatus) {
        this.x += this.speed * direction
        // 如果是根据一个变量的不同类型的值，给另一个变量赋上不同的值，
        // 那么，就可以认为这两个变量有一个关联，
        // 不用 if...else if...这种结构来判断
        // 而是用一个字典，把这种值的关系映射出来，最清楚，这样是更好的选择
        // 如果 if else if 分支很多的话，就不会很清楚
        // 但是用字典，就一定很清楚
        var directionFrom = {
            '-1': 'left',
            '1': 'right',
        }
        // 一个转换数字为字符串的小技巧
        this.direction = directionFrom['' + direction]

        var statusFrom = {
            down: 'run',
            up: 'idle',
        }
        this.status = statusFrom[keyStatus]
        this.setAnimation()
    }
}
