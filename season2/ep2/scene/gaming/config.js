const config = {
    fps: 50,
    player_speed: 10,
    bullet_speed: 3,
    cooldown: 3,
    galaxy_speed: 3,
}

bindAll('.config-input-slider', 'input', (event) => {
    const t = event.target
    const item = t.dataset.item
    const name = t.dataset.name
    const v = t.value
    eval(`${item} = ${v}`)

    // 同时改掉显示的数字
     const span = t.closest('div').querySelector('span')
     span.innerText = `${name}: ${v}`
})
