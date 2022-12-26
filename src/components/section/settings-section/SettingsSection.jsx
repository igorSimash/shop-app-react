import React from 'react';
import AddProduct from "./settings/AddProduct";
import ChangePriceRange from "./settings/ChangePriceRange";
import SortBy from "./settings/SortBy";

const SettingsSection = () => {



    return (
        <aside className={'w-[250px] sm:w-[180px] s:w-[120px] h-full border-t-2'}>
            <AddProduct/>
            <ChangePriceRange/>
            <SortBy/>
        </aside>
    );
};

export default SettingsSection;