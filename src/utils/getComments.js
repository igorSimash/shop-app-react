import axios from "axios";
import {getCommentsAction} from "../redux/reducers/CommentReducer";

export const getComments = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/comments')
            .then(res => {
                dispatch(getCommentsAction(res.data))
            })

    }
}