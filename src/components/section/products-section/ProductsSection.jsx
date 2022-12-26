import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../../utils/getProducts";
import {getComments} from "../../../utils/getComments";
import Loader from "../../loader/Loader";
import ProductsList from "./ProductsList";

const ProductsSection = () => {
    const dispatch = useDispatch();
    const priceRange = useSelector(state => state.priceRange.price);

    useEffect( () => {
        dispatch(getProducts(priceRange));
        dispatch(getComments());
    }, []);


    const loading = useSelector(state => state.products.isLoading);

    return (
        <section className={'border-t-2 border-l-2 h-fit w-[calc(100%-250px)] sm:w-[calc(100%-180px)] s:w-[calc(100%-120px)]'}>
            <div className={'w-full flex justify-center'}>
                {
                    loading
                    ?
                    <div className={'flex justify-center w-full'}>
                        <Loader/>
                    </div>
                    :
                    <ProductsList/>
                }
            </div>
        </section>
    );
};

export default ProductsSection;