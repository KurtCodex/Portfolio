import React, { useState } from "react"
import { BurguerBtn } from "./BurguerBtn"
import { Link } from "./index"

import "../styles/navbar.scss"

export const Navbar = () => {

    const [clicked, setClicked] = useState(false)


    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <>
            <div className="navbar">
                <div className="navbar-title">
                    <h2>Logo </h2>
                </div>
                <div className={`navbar-buttons ${clicked ? 'active' : ''}`}>
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/About">About</Link>
                    <Link className="link" to="/Projects">Projects</Link>
                    <Link className="link" to="/Contact">Contact</Link>

                </div>
                <div className="navbar-burguer-btn" >
                    <BurguerBtn clicked={clicked} handleClick={handleClick} />
                </div>
            </div>
            <div className={`Background-blackblur ${clicked ? 'active' : ''}`}>

            </div>
        </>
    )
}
