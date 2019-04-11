import { ADD_PLAYER, GET_PLAYER, DELETE_PLAYER } from '../actions/playerActions'

const initState = {
    players: [
        { first_name: 'Najib', last_name: 'Kigongo', shirt_no: '45', nationality: 'Ugandan', dob: '5/12/1998', age: '20', position: 'Midfielder', strongest_foot: 'Right', former_club: 'Vipers', bio: 'Top scoreer of vipers', }
    ]
}

export default (state = initState, action) => {
    switch (action.type) {
        case ADD_PLAYER:
            console.log('create player', action.player);
            return state;
        case GET_PLAYER:
            console.log('fetched player', action.player);
            return state;
        case DELETE_PLAYER:
            console.log('deleted player', action)
            return state;
        default:
            return state
    }
}
