import React, {useState} from 'react';
import InputWithLabel from "../input/InputWithLabel";
import StandardButton from "../button/StandardButton";
import axios from "axios";
import {useDispatch} from "react-redux";
import {getProducts} from "../../utils/getProducts";

const FormAddProduct = ({setVisibility}) => {
    const [name, setName] = useState('');
    const [count, setCount] = useState('');
    const [image, setImage] = useState('');
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [weight, setWeight] = useState('');
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    const continueAdding = (e) => {
        e.preventDefault();
        if (name && count && image)
            setPage(2);
    }

    const confirm = (e) => {
        e.preventDefault();
        if (weight && height && width) {
            axios({
                method: 'post',
                url: 'http://localhost:3001/product',
                data: {
                    "imageUrl": image,
                    "name": name,
                    "count": count,
                    "size": {
                        "width": width,
                        "height": height
                    },
                    "weight": weight + 'g'
                }
            })
                .then(() => dispatch(getProducts())
            )
            setName('');
            setCount('');
            setImage('');
            setHeight('');
            setWidth('');
            setWeight('');
            setPage(1);
            setVisibility(false);
        }
    }

    const cancel = (e) => {
        e.preventDefault();
        setName('');
        setCount('');
        setImage('');
        setHeight('');
        setWidth('');
        setWeight('');
        setPage(1);
        setVisibility(false);
    }

    return (
        <form className={'w-full h-full'}>
            {
                page === 1
            ?
                <div className={'w-full h-full flex flex-col justify-around items-center'}>
                    <div className={'flex justify-around w-full'}>
                        <InputWithLabel label={'Name'} placeholder={'Product name'} value={name}
                                        inputType={'text'} onChange={(e) => setName(e.target.value)}/>
                        <InputWithLabel label={'Count'} placeholder={'Product count'} value={count}
                                        inputType={'number'} onChange={(e) => setCount(e.target.value)}/>
                    </div>
                    <div className={'w-full flex justify-center'}>
                        <InputWithLabel label={'Image'} placeholder={'Product image'} value={image}
                                        inputType={'text'} onChange={(e) => setImage(e.target.value)}/>
                    </div>
                    <div className={'flex justify-around w-full'}>
                        <StandardButton
                            onClick={continueAdding}
                        >
                            Continue
                        </StandardButton>
                        <StandardButton
                            onClick={cancel}
                            color={'red'}
                        >
                            Cancel adding
                        </StandardButton>
                    </div>
                </div>
            :
                <div className={'w-full h-full flex flex-col justify-around items-center'}>
                    <div className={'flex justify-around w-full'}>
                        <InputWithLabel label={'Height'} placeholder={'Product height'} value={height}
                                        inputType={'number'} onChange={(e) => setHeight(e.target.value)}/>
                        <InputWithLabel label={'Width'} placeholder={'Product width'} value={width}
                                        inputType={'number'} onChange={(e) => setWidth(e.target.value)}/>
                    </div>
                    <div className={'w-full flex justify-center'}>
                        <InputWithLabel label={'Weight'} placeholder={'Product weight'} value={weight}
                                        inputType={'number'} onChange={(e) => setWeight(e.target.value)}/>
                    </div>
                    <div className={'flex justify-around w-full'}>
                        <StandardButton
                            onClick={confirm}
                            color={'green'}
                        >
                            Confirm adding
                        </StandardButton>
                        <StandardButton
                            onClick={cancel}
                            color={'red'}
                        >
                            Cancel adding
                        </StandardButton>
                    </div>
                </div>
            }

        </form>
    );
};

export default FormAddProduct;