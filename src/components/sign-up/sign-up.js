import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './sign-up.css'

export default function Signup() {
    const [clinkon,setclinkon] = useState(false);
    const Opensingup = ()=> setclinkon(false);
    const Opensignin = ()=> setclinkon(true);
    console.log(clinkon);

    return (
        <div className={clinkon?'container':'container sign-up-mode'}>
        <div className="forms-container">
            <div className="signin-signup">
                <form action="#" className="sign-in-form">
                    <h2 className="title">Sign in</h2>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" value="Login" className="btnsk solid" />
                    <p className="social-text">Or Sign in with social platforms</p>
                    <div className="social-media">
                        <Link href="#" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link href="#" className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link href="#" className="social-icon">
                            <i className="fab fa-google"></i>
                        </Link>
                        <Link href="#" className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                    </div>
                </form>
                <form action="#" className="sign-up-form">
                    <h2 className="title">Sign up</h2>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-envelope"></i>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" className="btnsk" value="Sign up" />
                    <p className="social-text">Or Sign up with social platforms</p>
                    <div className="social-media">
                        <Link href="#" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link href="#" className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link href="#" className="social-icon">
                            <i className="fab fa-google"></i>
                        </Link>
                        <Link href="#" className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                    </div>
                </form>
            </div>
        </div>

        <div className="panels-container">
            <div className="panel left-panel">
                <div className="content">
                    <h3>New here ?</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                        ex ratione. Aliquid!
                    </p>
                    <button className="btnsk transparent" onClick={Opensingup}>
                        Sign up
                    </button>
                </div>
                <img src="img/log.svg" className="image" alt="" />
            </div>
            <div className="panel right-panel">
                <div className="content">
                    <h3>One of us ?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        laboriosam ad deleniti.
                    </p>
                    <button className="btnsk transparent"  onClick={Opensignin}>
                        Sign in
                    </button>
                </div>
                <img src="img/register.svg" className="image" alt="" />
            </div>
        </div>
    </div>
    )
}

