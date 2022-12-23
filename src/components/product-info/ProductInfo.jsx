import React from 'react';
import StandardButton from "../button/StandardButton";
import Modal from "../modal/Modal";
import {useState} from "react";
import FormChangeProduct from "../form/form-change-product/FormChangeProduct";
import CommentModal from "../comment/CommentModal";

const ProductInfo = ({img, count, weight, name, height, width, id, price}) => {
    const [modalVisibleChangeInfo, setModalVisibleChangeInfo] = useState(false)
    const [modalVisibleComments, setModalVisibleComments] = useState(false)

    return (
        <div className={'w-full h-full flex flex-col justify-center'}>
            <div className={'w-full h-3/5 s:h-1/2 flex justify-center mt-6'}>
                <div className={'flex justify-center'}>
                    <img src={img} className={'object-contain'} alt=""/>
                </div>
            </div>
            <div className={'flex flex-col items-center w-full'}>
                <span className={'font-bold text-2xl s:text-xl tracking-wide mt-2'}>{name}</span>
                <div className={'flex justify-around w-1/2 my-3'}>
                    <span className={'h-fit font-bold text-lg s:text-sm'}>Count: {count}</span>
                    <span className={'h-fit font-bold text-lg s:text-sm'}>Weight: {weight}</span>
                </div>
                <div className={'flex justify-around w-1/2 my-3'}>
                    <span className={'h-fit font-bold text-lg s:text-sm'}>Height: {height}</span>
                    <span className={'h-fit font-bold text-lg s:text-sm'}>Width: {width}</span>
                </div>
                <div className={'flex justify-around w-1/2 my-3'}>
                    <StandardButton
                        onClick={() => {
                            setModalVisibleChangeInfo(true)
                        }}
                    >
                        Edit info
                    </StandardButton>
                    {modalVisibleChangeInfo
                        &&
                        <Modal setVisibility={setModalVisibleChangeInfo}>
                            <FormChangeProduct setVisibility={setModalVisibleChangeInfo} price={price}
                                               img={img} name={name} count={count}
                                               weight={weight} height={height} width={width} id={id}/>
                        </Modal>
                    }
                    {modalVisibleComments
                        &&
                        <Modal setVisibility={setModalVisibleComments} size={'big'}>
                            <CommentModal id={id}/>
                        </Modal>
                    }
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