export const deletePlayer = (player) => {
    return (dispatch, getState) => {
        // database api
        dispatch({ type: 'DELETE_PLAYER', player });
    }
}