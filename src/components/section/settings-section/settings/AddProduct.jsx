import React, {useState} from 'react';
import StandardButton from "../../../button/StandardButton";
import FormAddProduct from "../../../form/form-add-product/FormAddProduct";
import Modal from "../../../modal/Modal";

const AddProduct = () => {
    const [modalVisibleAddProduct, setModalVisibleAddProduct] = useState(false);
    return (
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
    );
};

export default AddProduct;