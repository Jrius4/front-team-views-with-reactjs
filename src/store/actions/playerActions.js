

// import axios from "axios"

// export function addPlayer(player) {
//     return(dispatch) => {
//         return axios.post('https://police-fc.herokuapp.com/api/players').then((response) =>{
//             dispatch({type: 'ADD_PLAYERS', player})
//         })
//     }
// }


export const ADD_PLAYER = 'ADD_PLAYERS'
export const addPlayer = () => {
    return (dispatch) => {
        // database api
        fetch('https://police-fc.herokuapp.com/api/players', {
            method: 'post',
            headers: {
                'entries': 'json'
            },
            body: JSON.stringify
        })
            .then(res => res.json())
            .then(player => {
                dispatch({
                    type: ADD_PLAYER,
                      player,
                })
            });
    }
};

export const GET_PLAYER = 'GET_PLAYER'
export const getPlayer = () => {
    return (dispatch) => {
        // database api
        fetch('https://police-fc.herokuapp.com/api/players',{
            method: 'get',
        })
        .then(res => res.json())
        .then(player => {
            dispatch({
                type: GET_PLAYER,
                player,
            })
        });
    }
};

export const DELETE_PLAYER = 'DELETE_PLAYER'
export const deletePlayer = () => {
    return (dispatch) => {
        // database api
        fetch('https://police-fc.herokuapp.com/api/players',{
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify
        })
        .then(res => res.json())
        .then(player => {
            dispatch({
                type: DELETE_PLAYER,
                player,
            })
        });
    }
};





























// export const ADD_PLAYERS = 'ADD_PLAYERS'
// export const GET_PLAYERS = 'GET_PLAYERS'
// // export const DELETE_PLAYERS = 'DELETE_PLAYERS'




// export const deletePlayer = (player) => {
//     return (dispatch) => {
//         // database api
//         dispatch({ type: 'DELETE_PLAYERS', player });
//     }
// };