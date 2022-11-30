import axios from "axios";
import {getCommentsAction} from "../redux/reducers/CommentReducer.js";

export const getComments = () => {
    return (dispatch) => {
        axios.get('https://ihor-shop-server.vercel.app/comments')
            .then(res => {
                dispatch(getCommentsAction(res.data))
            })

    }
}