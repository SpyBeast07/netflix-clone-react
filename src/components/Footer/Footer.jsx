import React from 'react'
import './Footer.css'
import linkedin_icon from '../../assets/images/linkedin_icon.svg'
import instagram_icon from '../../assets/images/instagram_icon.svg'
import twitter_icon from '../../assets/images/twitter_icon.svg'
import gmail_icon from '../../assets/images/gmail_icon.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/kushagra-gupta-0a4b49239/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin_icon} alt="LinkedIn" />
                </a>
                <a href="https://www.instagram.com/k_u_s_h_a_g_r_a._/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram_icon} alt="Instagram" />
                </a>
                <a href="https://x.com/Kushagra7503" target="_blank" rel="noopener noreferrer">
                    <img src={twitter_icon} alt="Twitter" />
                </a>
                <a href="mailto:kushagra7503@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={gmail_icon} alt="Gmail" />
                </a>
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
