import { combineReducers } from 'redux';
import player from './player.reducer'
import items from './items.reducer'
import score from './score.reducer'

const reducers = {
    player,
    items,
    score
};
module.exports = combineReducers(reducers);