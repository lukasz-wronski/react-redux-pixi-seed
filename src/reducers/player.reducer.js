import config from 'config'

const defaultState = {
    x: config.stage.width / 2,
    y: config.stage.height - 100
}

export default function(state = defaultState, action) {
    if(action.type == 'PLAYER_MOVED') {
        
        let newX = action.direction == 'left' ? state.x - 20 : state.x + 20

        if(newX < 0)
            newX = 0
        
        if(newX > config.stage.maxPosition)
            newX = config.stage.maxPosition

        return {
            x: newX,
            y: state.y
        }
    }

    return state
}