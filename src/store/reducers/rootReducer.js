import authReducer from './authReducer'
import playerReduer from './playerReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    player: playerReduer
})

export default rootReducer; 