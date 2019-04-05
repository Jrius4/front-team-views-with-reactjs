import { ADD_PLAYERS } from '../actions/playerActions'

const initState = {
    players: [
        { id: '1', first_name: 'Najib', last_name: 'Shonix', date: '12/02/1999', nationality: 'Ugandan', position: '1', foot: 'Left', shirt_number: 96, former_club: 'teamm' },
    ]
}

export default (state = initState, action) => {
    switch (action.type) {
        case ADD_PLAYERS:
        return ('create player', action.player);
        default: 
            return state
    }
}
