var player = {}
var sky = {}
var score = 0

class Scene_gaming extends Scene {
    constructor(game) {
        super(game)
        this.init()
    }

    // 在父类 scene 的 里面，如果 this.instance 已经存在，
    // 就不会再执行 Scene 的构造函数，init() 就不会再被执行一次
    static new(game) {
        // 重新初始化这些全局变量
        player = Player(game)
        sky = Sky(game)
        var i = super.new(game)
        return i
    }

    init() {
        player = Player(this.game)
        sky = Sky(this.game)

        this.game.registerAction('a', () => {
            player.moveLeft()
        })
        this.game.registerAction('d', () => {
            player.moveRight()
        })
        this.game.registerAction('w', () => {
            player.moveUp()
        })
        this.game.registerAction('s', () => {
            player.moveDown()
        })
    }

    draw() {
        // 留意先后顺序，不然会被覆盖掉
        this.game.drawImage(sky)
        
        this.game.drawImage(player)
    }
}

