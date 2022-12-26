const SET_SORTBY = 'SET_SORTBY';

const initialState = {
    sortBy: 'nameA_Z'
}

export const sortByReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORTBY:
            return {
                sortBy: action.payload
            }
        default :
            return state
    }
}

export const setSortByAction = (payload) => ({type: SET_SORTBY, payload});