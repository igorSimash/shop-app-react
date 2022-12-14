import React from 'react';
import StandardButton from "../button/StandardButton";
import ButtonDelete from "../button/ButtonDelete";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {sortProducts} from "../../utils/getProducts";
import Modal from "../modal/Modal";
import {useState} from "react";
import ProductInfo from "../product-info/ProductInfo";

const Product = ({name, count, img, width, height, weight, id, price}) => {
    const [modalVisibleInfo, setModalVisibleInfo] = useState(false)
    const [modalVisibleDelete, setModalVisibleDelete] = useState(false)
    const dispatch = useDispatch();
    const priceRange = useSelector(state => state.priceRange.price)

    const deleteProduct = () => {
        axios.delete(`https://ihor-shop-server.vercel.app/products`, {data: {product_id: id}})
            .then(() => setModalVisibleDelete(false))
            .then(() => dispatch(sortProducts(priceRange)));
    }

    return (
        <div className={'w-44 sm:w-52 s:w-28 mx-auto flex flex-col justify-end'}>
            <div className={'w-full h-64 flex items-center justify-center'}>
                <img src={img} alt="" className={' rounded-xl'}/>
            </div>
            <div className={'mx-4 s:mx-1 mt-1 flex justify-between text-darkBlue'}>
                <span className={'font-bold text-lg s:text-sm'}>
                    {name}
                </span>
                <span className={'s:text-sm'}>
                    {price}
                </span>
            </div>
            <div className={'flex justify-around mt-3 mb-4'}>
                <StandardButton
                    onClick={() => setModalVisibleInfo(true)}
                >
                    See info
                </StandardButton>
                <Modal isVisible={modalVisibleInfo} setVisibility={setModalVisibleInfo} size={'big'}>
                    <ProductInfo img={img} name={name} count={count} setModalVisibleInfo={() => setModalVisibleInfo(false)}
                                 weight={weight} height={height} id={id} width={width} price={price}/>
                </Modal>
                <Modal isVisible={modalVisibleDelete} setVisibility={setModalVisibleDelete}>
                    <div className={'h-full flex flex-col justify-around items-center'}>
                        <span className={'font-bold text-2xl s:text-xl'}>
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