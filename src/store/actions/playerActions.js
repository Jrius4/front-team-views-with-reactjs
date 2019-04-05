export const ADD_PLAYERS = 'ADD_PLAYERS'


export const addPlayer = () => {
    return (dispatch) => {
        // database api
        fetch('https://police-fc.herokuapp.com/api/players')
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: ADD_PLAYERS,
                      player: json
                })
            });
    }
};

export const deletePlayer = (player) => {
    return (dispatch, getState) => {
        // database api
        dispatch({ type: 'DELETE_PLAYER', player });
    }
};