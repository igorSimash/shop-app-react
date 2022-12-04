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
        <section className={'border-t-2 w-[calc(100%-250px)]'}>

            <div className={'flex justify-center'}>
                <div className={'grid grid-cols-5 gap-5'}>
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