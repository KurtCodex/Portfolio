import React from 'react'
import "../styles/home.scss"
import IAMimg from "../assets/img/Iam-IMG2.jpeg"

export const Home = () => {
    return (
        <>
            <div className='box-home'>
                <div className='text-home'>
                    <div className='welcome-text-home'>
                        <h3>Hi, I'am Franco Vidales, and I'am</h3>
                    </div>
                    <div className='title-home'>
                        <h1>Front-End Developer</h1>
                    </div>
                    <div className='btn-contactme-querypc'>
                        <button>Contact Me</button>
                    </div>
                </div>
                <div className='img-home'>
                    <img src={IAMimg} alt="" />
                </div>
                <div className='btn-contactme-queryphone'>
                    <button>Contact Me</button>
                </div>
            </div>
        </>
    )
}
