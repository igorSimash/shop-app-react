const GET_PRODUCTS = "GET_PRODUCTS"

const defaultState = {
    products: [],
    isLoading: true,
}

export const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_PRODUCTS: return {products: action.payload.sort((a, b) => a.name.localeCompare(b.name)), isLoading: false}

        default:
            return state
    }
}

export const getProductsAction = (payload) => ({type: GET_PRODUCTS, payload})