import React from 'react';
import logo from "../../assets/logo3.png"
const Header = () => {
    return (
        <header className={'w-full h-14 bg-transparent flex items-center '}>
            <div className={'text-black flex items-center justify-center w-full h-full'}>
                <img className={'h-full'} src={logo} alt=""/>
                <span className={'text-[#693A5F] text-2xl tracking-wide uppercase font-bold'}>Shop</span>
            </div>
        </header>
    );
};

export default Header;