const GET_COMMENTS = "GET_COMMENTS"
const defaultState = {
    comments: []
}
export const commentReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_COMMENTS: return {comments: action.payload}

        default:
            return state
    }
}


export const getCommentsAction = (payload) => ({type: GET_COMMENTS, payload})