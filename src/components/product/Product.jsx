import React from 'react';
import StandardButton from "../button/StandardButton";
import ButtonDelete from "../button/ButtonDelete";
import axios from "axios";
import {useDispatch} from "react-redux";
import {getProducts} from "../../utils/getProducts";
import Modal from "../modal/Modal";
import {useState} from "react";
import ProductInfo from "../product-info/ProductInfo";

const Product = ({name, count, img, width, height, weight, id}) => {
    const [modalVisibleInfo, setModalVisibleInfo] = useState(false)
    const [modalVisibleDelete, setModalVisibleDelete] = useState(false)

    const dispatch = useDispatch();
    const deleteProduct = () => {
        axios.delete(`http://localhost:3001/product/${id}`)
            .then(() => dispatch(getProducts()))
    }


    return (
        <div className={'w-64 rounded-xl border-2 border-gray-300'}>
            <div className={'w-full h-64 flex items-center'}>
                <img src={img} alt="" className={'w-full rounded-xl'}/>
            </div>
            <div className={'mx-2 mt-1 flex justify-between text-darkBlue'}>
                <span className={'font-bold text-lg'}>
                    {name}
                </span>
                <span>
                    Count: {count}
                </span>
            </div>
            <div className={'flex justify-around mt-3 mb-4'}>
                <StandardButton
                    onClick={() => setModalVisibleInfo(true)}
                >See info</StandardButton>
                <Modal isVisible={modalVisibleInfo} setVisibility={setModalVisibleInfo} size={'big'}>
                    <ProductInfo img={img} name={name} count={count} setModalVisibleInfo={() => setModalVisibleInfo(false)}
                                 weight={weight} height={height} id={id} width={width}/>
                </Modal>
                <Modal isVisible={modalVisibleDelete} setVisibility={setModalVisibleDelete}>
                    <div className={'h-full flex flex-col justify-around items-center'}>
                        <span className={'font-bold text-2xl'}>
                            You want to delete this product?
                        </span>
                        <div className={'w-full flex justify-around text-2xl'}>
                            <StandardButton
                                color={'green'}
                                onClick={deleteProduct}
                            >
                                Yes
                            </StandardButton>
                            <ButtonDelete
                                onClick={() => setModalVisibleDelete(false)}
                            >
                                No
                            </ButtonDelete>
                        </div>
                    </div>
                </Modal>
                <ButtonDelete
                    onClick={() => setModalVisibleDelete(true)}
                >
                    Delete
                </ButtonDelete>
            </div>
        </div>
    );
};

export default Product;