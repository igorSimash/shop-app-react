import React from 'react';

const InputWithLabel = ({label, inputType, placeholder, onChange, value}) => {
    return (
        <div className={'flex'}>
            <label
                htmlFor={label}
                className={'mx-2 my-auto text-lg s:text-sm'}
            >
                {label}
            </label>
            <input id={label} type={inputType} placeholder={placeholder}
                   className={`h-10 s:h-8 s:text-sm border-2 border-darkBlue rounded my-auto pl-2 sm:w-10/12 s:w-10/12 mr-2 s:pl-0.5`}
                   onChange={onChange} value={value}/>
        </div>
    );
};

export default InputWithLabel;