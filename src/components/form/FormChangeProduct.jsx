import React from 'react';
import InputWithLabel from "../input/InputWithLabel";
import StandardButton from "../button/StandardButton";
import {useState} from "react";
import axios from "axios";
import {getProducts} from "../../utils/getProducts";
import {useDispatch} from "react-redux";

const FormChangeProduct = ({name, count, img, width, height, weight, id, setVisibility}) => {
    const [newName, setNewName] = useState('');
    const [newCount, setNewCount] = useState('');
    const [newImage, setNewImage] = useState('');
    const [newHeight, setNewHeight] = useState('');
    const [newWidth, setNewWidth] = useState('');
    const [newWeight, setNewWeight] = useState('');
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const continueAdding = (e) => {
        e.preventDefault();
        if (!newName)
            setNewName(name)
        if (!newImage)
            setNewImage(img)
        if (!newCount)
            setNewCount(count)
        setPage(2);
    }

    const cancel = (e) => {
        e.preventDefault();
        setNewName('');
        setNewCount('');
        setNewImage('');
        setNewHeight('');
        setNewWidth('');
        setNewWeight('');
        setPage(1);
        setVisibility(false);
    }

    const confirm = (e) => {
        e.preventDefault();
            axios.put(`http://localhost:3001/product/${id}`,
                {
                    "imageUrl": newImage,
                    "name": newName,
                    "count": newCount,
                    "size": {
                        "width": newWidth ? newWidth : width,
                        "height": newHeight ? newHeight : height
                    },
                    "weight": newWeight ? newWeight + 'g' : weight
                }
                )
                .then(() => dispatch(getProducts()))
            setNewName('');
            setNewCount('');
            setNewImage('');
            setNewHeight('');
            setNewWidth('');
            setNewWeight('');
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
                            <InputWithLabel label={'Name'} placeholder={name} value={newName}
                                            inputType={'text'} onChange={(e) => setNewName(e.target.value)}/>
                            <InputWithLabel label={'Count'} placeholder={count} value={newCount}
                                            inputType={'number'} onChange={(e) => setNewCount(e.target.value)}/>
                        </div>
                        <div className={'w-full flex justify-center'}>
                            <InputWithLabel label={'Image'} placeholder={'Image URL'} value={newImage}
                                            inputType={'text'} onChange={(e) => setNewImage(e.target.value)}/>
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
                            <InputWithLabel label={'Height'} placeholder={height} value={newHeight}
                                            inputType={'number'} onChange={(e) => setNewHeight(e.target.value)}/>
                            <InputWithLabel label={'Width'} placeholder={width} value={newWidth}
                                            inputType={'number'} onChange={(e) => setNewWidth(e.target.value)}/>
                        </div>
                        <div className={'w-full flex justify-center'}>
                            <InputWithLabel label={'Weight'} placeholder={weight.substring(0, weight.length - 1)} value={newWeight}
                                            inputType={'number'} onChange={(e) => setNewWeight(e.target.value)}/>
                        </div>
                        <div className={'flex justify-around w-full'}>
                            <StandardButton
                                onClick={confirm}
                                color={'green'}
                            >
                                Confirm editing
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

export default FormChangeProduct;