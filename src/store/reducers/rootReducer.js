import authReducer from './authReducer'
import playerReduer from './playerReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    player: playerReduer,
    firestore: firestoreReducer
})

export default rootReducer; 