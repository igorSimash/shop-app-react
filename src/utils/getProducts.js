import axios from "axios";
import {getProductsAction} from "../redux/reducers/ProductReducer.js";

export const getProducts = () => {
    return (dispatch) => {
        axios.get('https://ihor-shop-server.vercel.app/products')
            .then(res => {
                dispatch(getProductsAction(res.data))
            });

    }
}