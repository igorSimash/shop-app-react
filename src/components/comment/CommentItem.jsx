import React from 'react';
import ButtonDelete from "../button/ButtonDelete";
import axios from "axios";
import {useDispatch} from "react-redux";
import {getComments} from "../../utils/getComments";

const CommentItem = ({date, description, id}) => {
    const dispatch = useDispatch()

    const deleteComment = () => {
        axios.delete(`https://ihor-shop-server.vercel.app/comments`, {data: {comm_id: id}})
            .then(() => dispatch(getComments()))
    }
    return (
        <div className={'border-2 border-gray-400 mx-2 my-2'}>
            <div className={'text-center underline font-semibold text-lg s:text-sm'}>
                {date}
            </div>
            <div className={'mx-2 mb-2 flex justify-between'}>
                <div className={'text-xl'}>
                    {description}
                </div>
                <div>
                    <ButtonDelete
                        onClick={deleteComment}
                    >
                        Delete
                    </ButtonDelete>
                </div>
            </div>
        </div>
    );
};

export default CommentItem;