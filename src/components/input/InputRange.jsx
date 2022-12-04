import React from 'react';

const InputRange = ({value, onChange}) => {
    return (
        <div className={'w-full flex justify-center mt-4'}>
            <input type="range" value={value} onChange={onChange} min="0" max="10000" className={'w-[calc(100%-20px)]'}/>
        </div>
    );
};

export default InputRange;