const initState = {
    players: [
        { id: '1', first_name: 'Najib', last_name: 'Shonix', date: '12/02/1999', nationality: 'Ugandan', position: '1', foot: 'Left', shirt_number: 96, former_club: 'teamm' },
    ]
}

const playerReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_PLAYER':
            console.log('add player', action.player)
            return state;
        case 'ADD_PLAYER_ERROR': 
            console.log('create project error' ,action.err)
            return state;
        default:  
            return state;
    }

}

export default playerReducer;  