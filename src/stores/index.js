const redux = require('redux');
const reducers = require('../reducers');

import collisionDetector from '../middleware/collision-detector'


module.exports = function (initialState) {
    const store = redux.createStore(reducers, initialState, redux.applyMiddleware(collisionDetector))

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers')
            store.replaceReducer(nextReducer)
        })
    }

    return store
}
