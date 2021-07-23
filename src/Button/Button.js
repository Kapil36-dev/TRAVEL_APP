import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'


// const style = ['btn-primary','btn-secondary'];
// const size = ['btn-medium','btn-large'];

export const Button = ({children,type,onclick,buttonStyle,buttonSize})=>{
    // const checkbutton = style.includes(buttonStyle)?buttonStyle:style[0];
    // const checkbuttonsize = size.includes(buttonSize)?buttonSize:size[0];

    return(
        <Link to='/Sign-up' className='btn-mobile'>
            <button className={`btn ${buttonSize} ${buttonStyle}`} onClick={onclick} type={type}>
                {children}
            </button>
        </Link>
    )
}