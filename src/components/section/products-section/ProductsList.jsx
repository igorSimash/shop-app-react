import React from 'react';
import {useSelector} from "react-redux";
import {useSort} from "../../../utils/hooks/useSort";
import Product from "../../product/Product";

const ProductsList = () => {
    const products = useSelector(state => state.products.products);
    const sortByState = useSelector(state => state.sortBy.sortBy);
    const sortedProducts = useSort(sortByState, products);


    return (
        <div
            className={'w-full grid grid-cols-5 gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 s:grid-cols-2'}>
            {
                sortedProducts.map(objItem =>
                    <Product key={objItem.id} name={objItem.name} img={objItem.imageUrl}
                             count={objItem.count} width={objItem.size.width} price={objItem.price}
                             height={objItem.size.height} weight={objItem.weight} id={objItem.id}/>
                )
            }
        </div>
    );
};

export default ProductsList;