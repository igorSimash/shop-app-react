import React from 'react';

const ButtonDelete = ({children, onClick}) => {
    return (
        <button
            onClick={onClick}
            className={'border-red-600 text-red-600 font-semibold rounded-md border-2 px-2 py-0.5 hover:bg-red-600 hover:text-white transition-all'}>
            {children}
        </button>
    );
};

export default ButtonDelete;