import React from 'react';
import './SignUp.css';
import Footer from '../../components/Footer/Footer'
import NavbarSignup from '../../components/Navbar-Signup/Navbar-Signup';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <div className='signup'>
            <NavbarSignup />
            <div className="main">
                <div className="box"></div>
                <div className="onboard">
                    <span>Unlimited movies, TV shows and more</span>
                    <span>Starts at ₹149. Cancel at any time.</span>
                    <span>Ready to watch? Enter your email to create or restart your membership.</span>
                    <div className="onboard-buttons">
                        <input type="text" placeholder="Email Address" />
                        <button className="btn btn-red" onClick={() => navigate('/login')}>Get Started &gt;</button>
                    </div>
                </div>
            </div>

            <div className="seperator"></div>

            <section className="contenta">
                <div>
                    <span>Enjoy on your TV</span>
                    <span>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</span>
                </div>
                <div className="secImg">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
                    <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoPlay loop muted></video>
                </div>
            </section>

            <div className="seperator"></div>

            <section className="contenta">
                <div className="secImg">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
                </div>
                <div>
                    <span>Download your shows to watch offline</span>
                    <span>Save your favourites easily and always have something to watch.</span>
                </div>
            </section>

            <div className="seperator"></div>

            <section className="contenta">
                <div>
                    <span>Watch everywhere</span>
                    <span>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</span>
                </div>
                <div className="secImg">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
                    <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" autoPlay loop muted></video>
                </div>
            </section>

            <div className="seperator"></div>

            <section className="contenta">
                <div className="secImg">
                    <img src="https://occ-0-2849-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="" />
                </div>
                <div>
                    <span>Create profiles for kids</span>
                    <span>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</span>
                </div>
            </section>

            <div className="seperator"></div>

            <section className="faq">
                <h2>Frequently Asked Questions</h2>
            </section>

            <div className="seperator"></div>

            <footer>
                <span className="ready">
                    Ready to watch? Enter your email to create or restart your membership.
                </span>
                <div className="onboard-buttons">
                    <input className="email-field" type="text" placeholder="Email Address" />
                    <button className="btn btn-red" onClick={() => navigate('/login')}>Get Started &gt;</button>
                </div>
            </footer>
            <Footer />
        </div>
    );
};

export default SignUp;