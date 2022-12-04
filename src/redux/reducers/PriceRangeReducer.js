const SET_PRICE_RANGE = "SET_PRICE_RANGE";
const defaultState = {
    price: 0
};

export const priceReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_PRICE_RANGE: return {price: action.payload}

        default:
            return state;
    }

}

export const setPriceRange = (payload) => ({type: SET_PRICE_RANGE, payload})