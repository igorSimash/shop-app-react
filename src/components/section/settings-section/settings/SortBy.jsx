import React from 'react';
import {useDispatch} from "react-redux";
import {setSortByAction} from "../../../../redux/reducers/SortByReducer";

const SortBy = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(setSortByAction(e.target.value))
    }

    return (
        <div className={'flex flex-col gap-2 items-center'}>
            <span className={'font-semibold text-lg s:text-sm'}>Sort by</span>
            <select
                onChange={handleChange}
                className={'border-black border-2 s:text-sm s:pl-0.5 rounded-md w-[calc(100%-20px)] pb-0.5'}>
                <option value="nameA_Z">Name (A-Z)</option>
                <option value="nameZ_A">Name (Z-A)</option>
                <option value="cheapToExp">From cheap to expensive</option>
                <option value="expToCheap">From expensive to cheap</option>
                <option value="count">Count</option>
            </select>
        </div>
    );
};

export default SortBy;