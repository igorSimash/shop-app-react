import React from 'react';
import {sortProducts} from "../../../../utils/getProducts";
import {setPriceRange} from "../../../../redux/reducers/PriceRangeReducer";
import {useDispatch, useSelector} from "react-redux";
import InputRange from "../../../input/InputRange";

const ChangePriceRange = () => {
    const dispatch = useDispatch();
    const priceRange = useSelector(state => state.priceRange.price);

    const changeRange = (e) => {
        dispatch(setPriceRange(e.target.value));
    }

    const sortProductsByRange = () => {
        dispatch(sortProducts(priceRange))
    }
    return (
            <div className={'border-b-2 pb-2'}>
                <div className={'flex justify-center'}>
                    <span className={'font-semibold text-lg s:text-sm'}>Price more than</span>
                </div>
                <div className={'flex justify-between w-full w-[calc(100%-20px)] mt-4'}>
                    <input type="number"
                           value={priceRange}
                           onChange={changeRange}
                           className={'ml-2 rounded-md text-center w-2/6 s:w-3/6 border-2 border-black'}
                    />
                    <button onClick={sortProductsByRange}
                            className={'w-1/4 s:text-sm s:w-2/6 border-2 border-black font-semibold rounded-md hover:bg-darkBlue hover:text-white transition-all'}
                    >
                        OK
                    </button>
                </div>
                <InputRange value={priceRange} onChange={changeRange}/>
            </div>
    );
};

export default ChangePriceRange;