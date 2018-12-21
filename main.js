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

        idle0: 'animation/idle/idle0.png',
        idle1: 'animation/idle/idle1.png',
        idle2: 'animation/idle/idle2.png',
        idle3: 'animation/idle/idle3.png',
        idle4: 'animation/idle/idle4.png',
        idle5: 'animation/idle/idle5.png',
        idle6: 'animation/idle/idle6.png',
        idle7: 'animation/idle/idle7.png',
        idle8: 'animation/idle/idle8.png',
        idle9: 'animation/idle/idle9.png',
    }

    var game = Game.instance(images, (g) => {
        // var scene = Scene_gaming.new(g)
        var scene = Scene_title.new(g)
        g.runWithScene(scene)
    })

    game.run()
}

__main()
