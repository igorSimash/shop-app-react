import React from 'react';

const Modal = ({children, setVisibility, isVisible, size}) => {
    return (
        <div>
            <div className={`fixed inset-0 bg-smoothGray z-10 ${isVisible ? 'flex justify-center items-center' : 'hidden'}`} onClick={() => setVisibility(false)}>
                <div className={`bg-white w-1/2 rounded-2xl ${size === 'big' ? "h-5/6" : "h-1/2"}`} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;