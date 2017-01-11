import config from 'config'

let spawnKey = 0

export default function(state = [], action) {
    if(action.type == 'SPAWN_ITEM') {
        const position = Math.floor(Math.random() * config.stage.maxPosition)
        return [{ key: spawnKey++, x: position, y: -50 }, ...state] // new array with spawned item
    }

    if(action.type == 'HANDLE_FRAME') {
        return state.map(item => ({ key: item.key, x: item.x, y: item.y + 2 })) // move bunnies
                    .filter(item => item.y < config.stage.height) // remove out of the screen bunnies
    }

    if(action.type == 'HANDLE_COLLISION') {
        return state.filter(item => item != action.item) // remove collided item
    }

    return state
}