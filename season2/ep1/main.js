// 入口函数，每一个程序都应该有且只有一个入口函数
const __main = () => {
    const textures = {
        paddle: './image/player.png',
        ball: './image/ball.png',
        brick: './image/brick1.png',
    }

    const game = Game(textures, (g) => {
        const s = Scene.instance(g)
        g.setScene(s)
        g.setFont('20px consolas')
    })

    // game.enableDebugMode(true)
    // game will run after loading is complete
    game.loads()
}
