import React from 'react';
import StandardButton from "../button/StandardButton";
import Modal from "../modal/Modal";
import {useState} from "react";
import FormChangeProduct from "../form/FormChangeProduct";
import CommentModal from "../comment/CommentModal";

const ProductInfo = ({img, count, weight, name, height, width, id}) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [modalVisibleComments, setModalVisibleComments] = useState(false)

    return (
        <div className={'w-full h-full '}>
            <div className={'w-full h-3/5 flex justify-center mt-6'}>
                <div className={'flex justify-center '}>
                    <img src={img} className={'border-2 border-gray-400 rounded-2xl'} alt=""/>
                </div>
            </div>
            <div className={'flex flex-col items-center w-full'}>
                <span className={'font-bold text-2xl tracking-wide mt-2'}>{name}</span>
                <div className={'flex justify-around w-1/2 my-3'}>
                    <span className={'h-fit font-bold text-lg'}>Count: {count}</span>
                    <span className={'h-fit font-bold text-lg'}>Weight: {weight}</span>
                </div>
                <div className={'flex justify-around w-1/2 my-3'}>
                    <span className={'h-fit font-bold text-lg'}>Height: {height}</span>
                    <span className={'h-fit font-bold text-lg'}>Width: {width}</span>
                </div>
                <div className={'flex justify-around w-1/2 my-3'}>
                    <StandardButton
                        onClick={() => {
                            setModalVisible(true)
                        }}
                    >
                        Edit info
                    </StandardButton>
                    <Modal isVisible={modalVisible} setVisibility={setModalVisible}>
                        <FormChangeProduct setVisibility={setModalVisible}
                                           img={img} name={name} count={count}
                                           weight={weight} height={height} width={width} id={id}/>
                    </Modal>
                    <Modal isVisible={modalVisibleComments} setVisibility={setModalVisibleComments} size={'big'}>
                        <CommentModal id={id}/>
                    </Modal>
                    <StandardButton
                        onClick={() => {
                            setModalVisibleComments(true)
                        }}

                    >
                        Comments
                    </StandardButton>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;