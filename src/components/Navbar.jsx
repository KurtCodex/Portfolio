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
                    <a href="/"> Home </a>
                    <Link to="/">Home2</Link>
                    <a href="/">About</a>
                    <a href="/"> Projects</a>
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
