// 启动游戏
var __main = function () {
    var images = {
        sky: 'img/sky.jpg',
        player: 'img/player.png',
        bullet: 'img/bullet.png',
    }

    var game = Game.instance(images, (g) => {
        var scene = Scene_gaming.new(g)
        g.runWithScene(scene)
    })

    game.run()
}

__main()
