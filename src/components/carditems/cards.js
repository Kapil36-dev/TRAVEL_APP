import React from 'react'
import Cardsitem from './cardsitem'
import './cards.css'
import '../../app.css'
import img1 from '../../image/img-9.jpg'
import img2 from '../../image/img-2.jpg'
import img3 from '../../image/img-4.jpg'
import img4 from '../../image/img-8.jpg'
import img5 from '../../image/img-3.jpg'


function Cards() {
    return (
        <div className="cards">
            <h1 className="cards-heading">Check out these EPIC Destinations!</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-item">
                        <Cardsitem  src={img1}
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/Services'/>
                        <Cardsitem src={img2}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/Services'
                        />
                    </ul>
                    <ul className="cards-item">
                        <Cardsitem src={img5}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/Services'
                        />
                        <Cardsitem src={img3}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <Cardsitem src={img4}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
