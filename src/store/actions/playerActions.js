export const addPlayer = (player) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // database api
        const firestore = getFirestore();
        firestore.collection('players').add({
            ...player,
        }).then(() => {
           dispatch({ type: 'ADD_PLAYER', player }); 
        }).catch((err) => {
            dispatch({ type: 'ADD_PLAYER_ERROR', err });
        })
        
    }
}