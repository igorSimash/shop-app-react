const GET_PRODUCTS = "GET_PRODUCTS";
const SORT_PRODUCTS = "SORT_PRODUCTS";

const defaultState = {
    products: [],
    isLoading: true,
}

export const productReducer =  (state = defaultState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                products: action.payload
                    .sort((a, b) => a.name.localeCompare(b.name)),
                isLoading: false
            }
        case SORT_PRODUCTS:
            return {
                products: action.payload.data
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .filter((el) => Number(el.price.slice(0, -1)) > action.payload.priceRange),
                isLoading: false
    }
        default:
            return state
    }
}

export const getProductsAction = (payload) => ({type: GET_PRODUCTS, payload});
export const sortProductsAction = (payload) => ({type: SORT_PRODUCTS, payload});