import React from 'react';
import {useState} from "react";
import axios from "axios";
import {sortProducts} from "../../../utils/getProducts";
import {useDispatch, useSelector} from "react-redux";
import PageOneFormProduct from "../pages/PageOneFormProduct";
import PageTwoFormProduct from "../pages/PageTwoFormProduct";

const FormChangeProduct = ({name, count, img, width, height, weight, id, setVisibility, price}) => {
    const [newName, setNewName] = useState('');
    const [newCount, setNewCount] = useState('');
    const [newImage, setNewImage] = useState('');
    const [newHeight, setNewHeight] = useState('');
    const [newWidth, setNewWidth] = useState('');
    const [newWeight, setNewWeight] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const priceRange = useSelector(state => state.priceRange.price);
    const continueAdding = (e) => {
        e.preventDefault();
        if (!newName)
            setNewName(name);
        if (!newImage)
            setNewImage(img);
        if (!newCount)
            setNewCount(count);
        if (!newPrice)
            price[price.length - 1] === "$" ? setNewPrice(price.slice(0, -1)) : setNewPrice(price);
        setPage(2);
    }

    const resetStates = () => {
        setNewName('');
        setNewCount('');
        setNewImage('');
        setNewHeight('');
        setNewWidth('');
        setNewWeight('');
        setNewPrice('');
        setPage(1);
        setVisibility(false);
    }

    const cancelAdding = (e) => {
        e.preventDefault();
        resetStates();
    }

    const confirmAdding = (e) => {
        e.preventDefault()
        axios.put(`https://ihor-shop-server.vercel.app/products`,
            {
                "id": id,
                "imageUrl": newImage,
                "name": newName,
                "count": newCount,
                "price": newPrice.replace(/ /g,'') + "$",
                "size": {
                    "width": newWidth ? newWidth : width,
                    "height": newHeight ? newHeight : height
                },
                "weight": newWeight ? newWeight + 'g' : weight
            }
        )
            .then(() => {
                dispatch(sortProducts(priceRange))
                resetStates();
            })

    }

    return (
        <form className={'w-full p h-full'}>
            {
                page === 1
                    ?
                    <PageOneFormProduct name={newName} setName={setNewName} price={newPrice} setPrice={setNewPrice}
                        image={newImage} setImage={setNewImage} count={newCount}
                        setCount={setNewCount} continueAdding={continueAdding} cancelAdding={cancelAdding}/>
                    :
                    <PageTwoFormProduct height={newHeight} setHeight={setNewHeight} width={newWidth}
                                        setWidth={setNewWidth} weight={newWeight} setWeight={setNewWeight}
                                        confirm={confirmAdding} cancelAdding={cancelAdding}
                    />
            }

        </form>
    );
};

export default FormChangeProduct;