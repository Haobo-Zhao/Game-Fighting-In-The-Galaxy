// 启动游戏
var __main = function () {
    var images = {
        sky: 'img/sky.jpg',
        player: 'img/player.png',
        bullet: 'img/bullet.png',
        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
        enemy3: 'img/enemy3.png',
        bullet: 'img/bullet.png',
    }

    var game = Game.instance(images, (g) => {
        var scene = Scene_gaming.new(g)
        g.runWithScene(scene)
    })

    game.run()
}

__main()
