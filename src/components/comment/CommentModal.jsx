import React from 'react';
import CommentItem from "./CommentItem";
import StandardButton from "../button/StandardButton";
import Modal from "../modal/Modal";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getComments} from "../../utils/getComments";
import axios from "axios";

const CommentModal = ({id}) => {
    const [modalVisible, setModalVisible] = useState(false)
    const comments = useSelector(state => state.comments.comments)
    const dispatch = useDispatch()
    const [comment, setComment] = useState('')
    const confirmComment = () => {
        if (comment) {
            const date = new Date()
            axios({
                method: 'post',
                url: 'http://localhost:3001/comments',
                data: {
                    "productId": id,
                    "description": comment,
                    "date": `${
                        date.getHours() <= 9 ? `0` + date.getHours() : date.getHours()}:${date.getMinutes() <= 9 ? `0` + date.getMinutes() :
                        date.getMinutes()}` + ' ' + date.getFullYear()+"."+(date.getMonth()+1)+"."+ date.getDate()
                }
            })
                .then(() => dispatch(getComments())
                )
            setComment('');
            setModalVisible(false)
        }
    }

    return (
        <div>
            <div className={'text-center font-bold text-2xl my-1'}>Comments</div>
            <div className={'flex flex-col justify-between '}>
                <div>
                    {comments.map(com =>
                        com.productId === id
                        &&
                        <CommentItem key={com.id} id={com.id} description={com.description} date={com.date}/>
                    )}
                </div>
                <div className={'mt-4 flex justify-center'}>
                    <StandardButton
                        onClick={() => setModalVisible(true)}
                    >
                        Add comment
                    </StandardButton>
                </div>
                <Modal isVisible={modalVisible} setVisibility={setModalVisible}>
                    <div className={'flex flex-col mx-3 justify-center h-full overflow-scroll'}>
                        <div className={''}>
                            <label htmlFor="" className={'text-xl'}>
                                Your comment:
                            </label>
                            <input type="text" placeholder={'Comment'} value={comment} onChange={(e) => setComment(e.target.value)}
                                   className={'ml-2 h-10 w-9/12 border-2 border-darkBlue rounded my-auto pl-2 '}/>
                        </div>
                        <div className={'flex justify-center mt-5'}>
                            <StandardButton
                                onClick={confirmComment}
                            >
                                Add comment
                            </StandardButton>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default CommentModal;