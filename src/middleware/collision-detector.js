import { handleCollision } from '../actions'

const ITEM_WIDTH = 26
const PLAYER_WIDTH = 26
const ITEM_HEIGHT = 37
const PLAYER_HEIGHT = 37

function hasCollision(player, item) {
    return player.x < item.x + ITEM_WIDTH &&
        player.x + PLAYER_WIDTH > item.x &&
        player.y < item.y + ITEM_HEIGHT &&
        PLAYER_HEIGHT + player.y > item.y
}

const collisionDetector = store => next => action => {
    if(action.type == 'HANDLE_FRAME') {
        const items = store.getState().items
        const player = store.getState().player

        for(let item of items) {
            if(hasCollision(player, item))
                next(handleCollision(item))
        }
    }

    next(action)
}

export default collisionDetector