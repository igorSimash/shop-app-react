import axios from "axios";
import {getProductsAction} from "../redux/reducers/ProductReducer";

export const getProducts = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/product')
            .then(res => {
                dispatch(getProductsAction(res.data))
            })

    }
// На каждое действие, в хранилище (store) посылается объект, описывающий что произошло,
//     затем вызывается редюсер (reducer) и состояние (state) сразу обновляется.

}