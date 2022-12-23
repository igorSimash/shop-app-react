import React from 'react';
import InputWithLabel from "../../input/InputWithLabel";
import StandardButton from "../../button/StandardButton";

const PageTwoFormProduct = (props) => {
    const {
        height, setHeight, width, setWidth, weight, setWeight, confirm, cancelAdding
    } = props;

    return (
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
                    onClick={cancelAdding}
                    color={'red'}
                >
                    Cancel adding
                </StandardButton>
            </div>
        </div>
    );
};

export default PageTwoFormProduct;