export const ADD_PLAYERS = 'ADD_PLAYERS'
export const GET_PLAYERS = 'GET_PLAYERS'
export const DELETE_PLAYERS = 'DELETE_PLAYERS'


export const addPlayer = () => {
    return (dispatch) => {
        // database api
        fetch('https://police-fc.herokuapp.com/api/players')
            .then(res => res.json())
            .then(player => {
                dispatch({
                    type: ADD_PLAYERS,
                      player,
                })
            });
    }
};

export const getPlayer = () => {
    return (dispatch) => {
        // database api
        fetch('https://police-fc.herokuapp.com/api/players')
        .then(res => res.json())
        .then(player => {
            dispatch({
                type: GET_PLAYERS,
                players: player,
            })
        });
    }
};

export const deletePlayer = (player) => {
    return (dispatch) => {
        // database api
        dispatch({ type: 'DELETE_PLAYERS', player });
    }
};