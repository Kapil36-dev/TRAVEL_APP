import '../../app.js'
import React from 'react'
import Section from '../section/section.js';
import Cards from '../carditems/cards.js';
import Footer from '../footer/Footer.js';


export default function Home() {
    return (
        <>
            <Section/>
            <Cards/>
            <Footer/>
        </>
    )
}
