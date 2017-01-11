export const handleFrame = (delta) => ({
    type: 'HANDLE_FRAME',
    delta
})

export const spawnItem = () => ({
    type: 'SPAWN_ITEM'
})

export const playerMoved = (direction) => ({
    type: 'PLAYER_MOVED',
    direction
})

export const handleCollision = (item) => ({
    type: 'HANDLE_COLLISION',
    item
})