import React, {useEffect} from 'react';
import Product from "../product/Product";
import StandardButton from "../button/StandardButton";
import Modal from "../modal/Modal";
import {useState} from "react";
import FormAddProduct from "../form/FormAddProduct";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../utils/getProducts";
import {getComments} from "../../utils/getComments";

const Section = () => {
    const [modalVisible, setModalVisible] = useState(false)

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProducts())
        dispatch(getComments())
    },[])

    const products = useSelector(state => state.products.products)
    const loading = useSelector(state => state.products.loading)


    return (
        <section className={''}>
            <div className={'flex justify-center my-12'}>
                <StandardButton
                    onClick={() => setModalVisible(true)}
                >
                    Add product
                </StandardButton>
                <Modal isVisible={modalVisible} setVisibility={setModalVisible}>
                    <FormAddProduct setVisibility={setModalVisible}/>
                </Modal>
            </div>
            <div className={'flex justify-center'}>
                <div className={'grid grid-cols-4 gap-6'}>
                    {
                        !loading
                        ?
                        products.map(product =>
                        <Product key={product.id} name={product.name} img={product.imageUrl}
                                 count={product.count} width={product.size.width}
                                 height={product.size.height} weight={product.weight} id={product.id}/>

                    )
                            :
                            null
                    }
                </div>
            </div>
        </section>
    );
};

export default Section;