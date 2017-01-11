export default function(state =  0, action) {

     if(action.type == 'HANDLE_COLLISION') {
        return state + 1
    }

    return state
}