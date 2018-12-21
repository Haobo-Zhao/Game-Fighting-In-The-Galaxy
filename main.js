// 启动游戏
var __main = function () {
    var images = {
        sky: 'img/sky.png',
        player: 'img/player.png',
        bullet: 'img/bullet.png',
        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
        enemy3: 'img/enemy3.png',
        bullet: 'img/bullet.png',
        comet1: 'img/comet1.png',
        comet2: 'img/comet2.png',
        galaxy: 'img/galaxy.png',
        particle: 'img/particle.png',
    }

    var game = Game.instance(images, (g) => {
        // var scene = Scene_gaming.new(g)
        var scene = Scene_title.new(g)
        g.runWithScene(scene)
    })

    game.run()
}

__main()
