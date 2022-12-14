import axios from "axios";
import {getProductsAction, sortProductsAction} from "../redux/reducers/ProductReducer.js";

export const getProducts = () => {
    return (dispatch) => {
        axios.get('https://ihor-shop-server.vercel.app/products')
            .then(res => {
                dispatch(getProductsAction(res.data))
            });
    }
}

export const sortProducts = (price = 0) => {
    return (dispatch) => {
        axios.get('https://ihor-shop-server.vercel.app/products')
            .then(res => {
                dispatch(sortProductsAction({data: res.data, priceRange: price}))
            });
    }
}

