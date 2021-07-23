import React, { useState,useEffect } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

export default function Navbar() {
    const [click,setclick]=useState(false);
    const [button,setbutton]=useState(true);


    const handleclick = ()=>setclick(!click);
    const Closenav = ()=>setclick(false);

    
    const showButton = ()=>{
        if(window.innerWidth<=960){
            setbutton(false);
        }
        else{
            setbutton(true);
        }
    }
useEffect(() => {
    showButton();
}, [])

    window.addEventListener('resize',showButton)
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className='navbar-logo' onClick={Closenav}>TRVL<i className="fab fa-typo3"/></Link>
                <div className="menu-icon" onClick={handleclick}>
                    <i className={click ?'fas fa-times':'fas fa-bars'}/>
                </div>
                <ul className={click?'nav-menu active':'nav-menu'}>
                    <li className="nav-item">
                        <Link to ='/' className="nav-links" onClick={Closenav}>home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ='/Services' className="nav-links" onClick={Closenav}>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ='/Products' className="nav-links" onClick={Closenav}>Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ='/Sign-up' className="nav-links-mobile" onClick={Closenav}>Sign up</Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn-secondary' buttonSize='btn-medium'>SIGN UP</Button>}
            </div>
        </nav>
    )
}
