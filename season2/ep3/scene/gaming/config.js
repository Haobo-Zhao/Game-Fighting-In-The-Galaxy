const config = {
    fps: 50,
    player_speed: 15,
    bullet_speed: 10,
    cooldown: 5,
    galaxy_speed: 1,
}

bindAll('.config-input-slider', 'input', (event) => {
    const item = t.dataset.item
    const name = t.dataset.name
    const t = event.target
    const v = t.value
    eval(`${item} = ${v}`)

    // 同时改掉显示的数字
     const span = t.closest('div').querySelector('span')
     span.innerText = `${name}: ${v}`
})
