import React from 'react';

const InputWithLabel = ({label, inputType, placeholder, onChange, value}) => {
    return (
        <div className={'flex'}>
            <label
                htmlFor={label}
                className={'mr-4 my-auto text-lg'}
            >
                {label}
            </label>
            <input id={label} type={inputType} placeholder={placeholder}
                   className={`h-10 border-2 border-darkBlue rounded my-auto pl-2 
                   ${label === 'Image' && 'w-64'} `}
                   onChange={onChange} value={value}/>
        </div>
    );
};

export default InputWithLabel;