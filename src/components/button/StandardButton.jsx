import React from 'react';

const StandardButton = ({children, onClick, color}) => {
    return (
        <button
            onClick={onClick}
            className={`font-semibold rounded-md border-2 px-2 py-0.5  hover:text-white transition-all
            ${color === 'green' ? 'border-green-500 hover:bg-green-500 text-green-500' : color === 'red' ?
                'border-red-600 hover:bg-red-600 text-red-600' : 'border-darkBlue hover:bg-darkBlue text-darkBlue'}`}>
                {children}
        </button>
    );
};

export default StandardButton;