import React from 'react'
import { Link } from "./index"
import "../styles/footer.scss"
export const Footer = () => {
    return (
        <>
            <div className='footer-box'>
                <div className='footer-floating-box'>
                    <div className='text-getstarted'>
                        <h2>
                            Ready to get started? <br />
                            Talk me us today
                        </h2>
                    </div>
                    <div className='btn-getstarted'>
                        <div className='btn-contactame'>
                            <button>Contact Me</button>
                        </div>
                    </div>
                </div>
                <div className='footer-base-box'>
                    <div className='footer-routes'>
                        <Link className="link" to="/">Home</Link>
                        <Link className="link" to="/About">About</Link>
                        <Link className="link" to="/Contact">Contact</Link>
                    </div>
                    <div className='footer-projects'>
                        <Link className="link" >Project 1</Link>
                        <Link className="link" >Project 2</Link>
                    </div>
                </div>
            </div>

        </>
    )
}
