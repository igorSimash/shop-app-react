import axios from "axios";
import {getProductsAction} from "../redux/reducers/ProductReducer";

export const getProducts = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/product')
            .then(res => {
                dispatch(getProductsAction(res.data))
            })

    }


}