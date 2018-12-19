var Player = function (game) {
    var image = game.images['player']
    var o = {
        image: image,
        x: 220,
        y: 200,
        w: image.width,
        h: image.height,
        speed: 10,
    }

    o.moveLeft = function () {
        o.x -= o.speed
    }
    o.moveRight = function () {
        o.x += o.speed
    }
    o.moveUp = function () {
        o.y -= o.speed
    }
    o.moveDown = function () {
        o.y += o.speed
    }

    return o
}
