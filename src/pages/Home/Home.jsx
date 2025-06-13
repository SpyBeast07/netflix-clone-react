import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/images/hero_banner.png'
import hero_title from '../../assets/images/hero_title.png'
import play_icon from '../../assets/images/play_icon.svg'
import info_icon from '../../assets/images/info_icon.svg'
import TitleCards from '../../components/TitleCards/TitleCards'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className="hero">
                <img src={hero_banner} alt="Banner" className='banner-img' />
                <div className="hero-caption">
                    <img src={hero_title} alt="Title" className='caption-img' />
                    <p>Rana Naidu is the go-to problem solver for the rich and famous. But when his father is released from jail, the one mess he can't handle may be his own.</p>
                    <div className="hero-btns">
                        <button className='btn'>
                            <img src={play_icon} alt="Play Button" />
                            Play
                        </button>
                        <button className='btn dark-btn'>
                            <img src={info_icon} alt="Info Button" />
                            More Info
                        </button>
                    </div>
                    <TitleCards/>
                </div>
            </div>
            <div className="more-cards">
                <TitleCards/>
                <TitleCards/>
                <TitleCards/>
                <TitleCards/>
            </div>
        </div>
    )
}

export default Home
