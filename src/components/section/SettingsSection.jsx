import React from 'react';
import StandardButton from "../button/StandardButton";
import Modal from "../modal/Modal";
import FormAddProduct from "../form/FormAddProduct";
import {useState} from "react";
import InputRange from "../input/InputRange";
import {useDispatch, useSelector} from "react-redux";
import {setPriceRange} from "../../redux/reducers/PriceRangeReducer";
import {sortProducts} from "../../utils/getProducts";

const SettingsSection = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();
    const priceRange = useSelector(state => state.priceRange.price);

    const changeRange = (e) => {
        dispatch(setPriceRange(e.target.value));
    }

    const sortProductsByRange = () => {
        dispatch(sortProducts(priceRange))
    }

    return (
        <aside className={'w-[250px] h-screen border-r-2 border-t-2'}>
            <div className={'flex items-center justify-center h-20 border-b-2'}>
                <StandardButton
                    onClick={() => setModalVisible(true)}
                >
                    Add product
                </StandardButton>
                <Modal isVisible={modalVisible} setVisibility={setModalVisible}>
                    <FormAddProduct setVisibility={setModalVisible}/>
                </Modal>
            </div>

            <div>
                <div className={'flex justify-between w-full w-[calc(100%-20px)] mt-4'}>
                    <span>More than</span>
                    <input type="number"
                           value={priceRange}
                           onChange={changeRange}
                           className={'ml-2 w-2/6 border-2 border-black'}
                    />
                    <button onClick={sortProductsByRange}
                            className={'w-1/4 border-2 border-black'}
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