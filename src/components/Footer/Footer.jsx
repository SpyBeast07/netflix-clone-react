import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/images/youtube_icon.svg'
import twitter_icon from '../../assets/images/twitter_icon.svg'
import instagram_icon from '../../assets/images/instagram_icon.svg'
import facebook_icon from '../../assets/images/facebook_icon.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-icons">
                <img src={youtube_icon} alt="Youtube" />
                <img src={twitter_icon} alt="Twitter" />
                <img src={instagram_icon} alt="Instagram" />
                <img src={facebook_icon} alt="Facebook" />
            </div>
            
            <div className="question">
                Questions? Call <span>000-800-919-1743</span>
            </div>
            <div className="footer-menu">
                <div className="footer-item">
                    <a href="">FAQ</a>
                    <a href="">Investor Relations</a>
                    <a href="">Privacy</a>
                    <a href="">Speed Test</a>
                </div>
                <div className="footer-item">
                    <a href="">Help Centre</a>
                    <a href="">Jobs</a>
                    <a href="">Cookie Preferences</a>
                    <a href="">Legal Notices</a>
                </div>
                <div className="footer-item">
                    <a href="">Accounts</a>
                    <a href="">Ways to Watch</a>
                    <a href="">Corporate Information</a>
                    <a href="">Only on Netflix</a>
                </div>
                <div className="footer-item">
                    <a href="">Media Centre</a>
                    <a href="">Terms of Use</a>
                    <a href="">Contact Us</a>
                    {/* <a href="">Only on Netflix</a> */}
                </div>
            </div>

            <p className='name-tag'>
                Netflix India
            </p>

            <p className='copyright-text'>
                © 1997-2024 Netflix, Inc.
            </p>
        </div>
    )
}

export default Footer
