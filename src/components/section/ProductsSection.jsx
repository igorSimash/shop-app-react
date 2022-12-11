import React, {useEffect} from 'react';
import Product from "../product/Product";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../utils/getProducts";
import {getComments} from "../../utils/getComments";
import Loader from "../loader/Loader";

const ProductsSection = () => {
    const dispatch = useDispatch();
    const priceRange = useSelector(state => state.priceRange.price);
    useEffect( () => {
        dispatch(getProducts(priceRange));
        dispatch(getComments());

    }, [dispatch]);

    const products = useSelector(state => state.products.products);
    const loading = useSelector(state => state.products.loading);


    return (
        <section className={'border-t-2 border-l-2 h-fit w-[calc(100%-250px)] sm:w-[calc(100%-180px)] s:w-[calc(100%-120px)]'}>

            <div className={'w-full flex justify-center'}>
                <div className={'w-full grid grid-cols-5 gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 s:grid-cols-2'}>
                    {
                        loading
                            ?
                            <Loader/>
                            :
                            products.map(product =>
                                <Product key={product.id} name={product.name} img={product.imageUrl}
                                         count={product.count} width={product.size.width} price={product.price}
                                         height={product.size.height} weight={product.weight} id={product.id}/>
                            )
                    }
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;