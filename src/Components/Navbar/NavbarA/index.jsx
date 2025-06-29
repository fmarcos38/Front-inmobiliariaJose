import React from 'react'
import Logo from '../../../Images/logo_ej_negro_1.png'
import MenuHamburgesa from '../../MenuHamburguesa';
import './style.css';

function NavbarA() {
    return (
        <div className='cont-navbar-A'>
            {/* menú hambur */}
            <div className='cont-menu-hambur'>
                <MenuHamburgesa />
            </div>
            {/* logo */}
            <div className='cont-logo-navA'>
                <img src={Logo} alt={'not found'} className='logo-navbarA' />
            </div>
        </div>
    )
}

export default NavbarA