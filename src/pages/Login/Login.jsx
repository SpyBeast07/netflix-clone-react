import React from 'react'
import './Login.css'
import logo from '../../assets/images/logo.svg'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className='login'>
            <img src={logo} className='login-logo' alt="Netflix" />
            <div className="login-form">
                <h1>Sign In</h1>
                <form>
                    <input type="text" placeholder='Email or mobile number' />
                    <input type="password" placeholder='Password' />
                    <button onClick={() => navigate('/home')}>Sign In</button>
                    <p>OR</p>
                    <button className='dark-button' onClick={() => navigate('/home')}>Use a sign-in code</button>
                    <span onClick={() => navigate('/signup')}>Forgot Password?</span>
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember Me</label>
                        </div>
                    </div>
                </form>
                <div className="form-switch">
                    <p>New to Netflix?<span onClick={() => navigate('/signup')}>Sign up now.</span></p>
                </div>
                <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Login
