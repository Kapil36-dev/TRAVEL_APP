import React from 'react'
import '../../app.css'
import { Link } from 'react-router-dom'
import './cards.css'



export default function Cardsitem({src,label,text,path}) {
    return (
        <>
            <li className="cards-list">
                <Link className="cards-list-link" to={path}>
                    <figure className="cards-list-picwrap" data-category={label}>
                        <img src={src} alt="Travel" className="card-list-img" />
                    </figure>
                    <div className="card-list-info">
                        <h5 className="info-text">{text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}
