import React, {useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../../utils/getProducts";
import {setPriceRange} from "../../../redux/reducers/PriceRangeReducer";
import PageOneFormProduct from "../pages/PageOneFormProduct";
import PageTwoFormProduct from "../pages/PageTwoFormProduct";

const FormAddProduct = ({setVisibility}) => {
    const [name, setName] = useState('');
    const [count, setCount] = useState('');
    const [image, setImage] = useState('');
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [weight, setWeight] = useState('');
    const [price, setPrice] = useState('');
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    const resetStates = () => {
        setName('');
        setCount('');
        setImage('');
        setHeight('');
        setWidth('');
        setWeight('');
        setPrice('');
        setPage(1);
        setVisibility(false);
    }

    const continueAdding = (e) => {
        e.preventDefault();
        if (name && count && image && price) setPage(2);
    }

    const confirmAdding = async (e) => {
        e.preventDefault();
        if (weight && height && width) {
            axios({
                method: 'post', url: 'https://ihor-shop-server.vercel.app/products', data: {
                    "imageUrl": image, "name": name, "count": count, "size": {
                        "width": width, "height": height
                    }, "weight": weight + 'g', "price": price.replace(/ /g,'') + '$'
                }
            })
                .then(() => {
                    dispatch(getProducts());
                    resetStates();
                })
                .then(() => {
                    dispatch(setPriceRange(0));
                })

        }
    }

    const cancelAdding = (e) => {
        e.preventDefault();
        resetStates();
    }

    return (
        <form className={'w-full h-full'}>
            {page === 1
                ?
                <PageOneFormProduct name={name} setName={setName} price={price} setPrice={setPrice}
                                    image={image} setImage={setImage} count={count}
                                    setCount={setCount} continueAdding={continueAdding}
                                    cancelAdding={cancelAdding}/>
                :
                <PageTwoFormProduct height={height} setHeight={setHeight} width={width}
                                    setWidth={setWidth} weight={weight} setWeight={setWeight}
                                    confirm={confirmAdding} cancelAdding={cancelAdding}
                />
                }

        </form>
    );
};

export default FormAddProduct;