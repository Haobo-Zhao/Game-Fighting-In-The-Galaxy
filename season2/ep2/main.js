// 入口函数，每一个程序都应该有且只有一个入口函数
const __main = () => {
    const textures = {
        bg: './image/space.png',
        galaxy: './image/galaxy.png',
        player: './image/player.png',
        bullet: './image/bullet.png',
        enemy1: './image/enemy1.png',
        enemy2: './image/enemy2.png',
        enemy3: './image/enemy3.png',
    }

    const game = Game(textures, (g) => {
        const s = SceneGaming.instance(g)
        g.setScene(s)
        g.setFont('20px consolas')
    })

    // game.enableDebugMode(true)
    // game will run after loading is complete
    game.loads()
}
