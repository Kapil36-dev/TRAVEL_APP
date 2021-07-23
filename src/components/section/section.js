import React from 'react'
import { Button } from '../Button/Button'
import '../../app.css'
import './section.css'


export default function Section() {
    return (
        <div className="section">
            <video src='/videos/video-1.mp4' autoPlay loop muted/>
            {/* <video src="../../videos/video-2.mp4" autoPlay loop muted/> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for!!</p>
            <div className="sec-btn">
                <Button className="btns" buttonStyle='btn-secondary' buttonSize='btn-large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn-primary' buttonSize='btn-large' onClick={console.log('hey')}>
                WATCH TRAILER <i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}
