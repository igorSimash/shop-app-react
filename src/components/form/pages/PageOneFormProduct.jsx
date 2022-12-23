import React from 'react';
import InputWithLabel from "../../input/InputWithLabel";
import StandardButton from "../../button/StandardButton";

const PageOneFormProduct = (props) => {
    const {name, setName, price, setPrice, image, setImage, count, setCount, continueAdding, cancelAdding} = props;

    return (
        <div className={'w-full h-full flex flex-col justify-around items-center'}>
            <div className={'flex justify-around md:justify-center sm:justify-center w-full'}>
                <InputWithLabel label={'Name'} placeholder={'Product name'} value={name}
                                inputType={'text'} onChange={(e) => setName(e.target.value)}/>

                <InputWithLabel label={'Price'} placeholder={'Product price'} value={price}
                                inputType={'number'} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div className={'w-full flex md:justify-center sm:justify-center justify-around'}>
                <InputWithLabel label={'Image'} placeholder={'Product image'} value={image}
                                inputType={'text'} onChange={(e) => setImage(e.target.value)}/>
                <InputWithLabel label={'Count'} placeholder={'Product count'} value={count}
                                inputType={'number'} onChange={(e) => setCount(e.target.value)}/>
            </div>
            <div className={'flex justify-around w-full'}>
                <StandardButton
                    onClick={continueAdding}
                >
                    Continue
                </StandardButton>
                <StandardButton
                    onClick={cancelAdding}
                    color={'red'}
                >
                    Cancel adding
                </StandardButton>
            </div>
        </div>
    );
};

export default PageOneFormProduct;