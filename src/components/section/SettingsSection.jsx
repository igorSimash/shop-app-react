import React from 'react';
import StandardButton from "../button/StandardButton";
import Modal from "../modal/Modal";
import FormAddProduct from "../form/form-add-product/FormAddProduct";
import {useState} from "react";
import InputRange from "../input/InputRange";
import {useDispatch, useSelector} from "react-redux";
import {setPriceRange} from "../../redux/reducers/PriceRangeReducer";
import {sortProducts} from "../../utils/getProducts";

const SettingsSection = () => {

    const [modalVisibleAddProduct, setModalVisibleAddProduct] = useState(false);
    const dispatch = useDispatch();
    const priceRange = useSelector(state => state.priceRange.price);

    const changeRange = (e) => {
        dispatch(setPriceRange(e.target.value));
    }

    const sortProductsByRange = () => {
        dispatch(sortProducts(priceRange))
    }

    return (
        <aside className={'w-[250px] sm:w-[180px] s:w-[120px] h-full border-t-2'}>
            <div className={'flex items-center justify-center h-20 border-b-2'}>
                <StandardButton
                    onClick={() => setModalVisibleAddProduct(true)}
                >
                    Add product
                </StandardButton>

                {modalVisibleAddProduct
                    &&
                    <Modal setVisibility={setModalVisibleAddProduct}>
                        <FormAddProduct setVisibility={setModalVisibleAddProduct}/>
                    </Modal>
                }

            </div>

            <div>
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
        </aside>
    );
};

export default SettingsSection;