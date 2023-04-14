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
                    <Link className="link" to="/">
                        <i className="gg-home-alt"></i>
                        <a className="nameHome">Home</a>
                    </Link>
                    <Link className="link" to="/About">
                        <i className="gg-menu-boxed"></i>
                        <a className="nameAbout">About</a>
                    </Link>
                    <Link className="link" to="/Projects">
                        <i className="gg-menu-boxed"></i>
                        <a className="nameProjects">Projects</a>
                    </Link>
                    <Link className="link" to="/Contact">
                        <i className="gg-menu-boxed"></i>
                        <a className="nameContact">Contact</a>
                    </Link>

                </div>
                <div className="navbar-burguer-btn" >
                    <BurguerBtn clicked={clicked} handleClick={handleClick} />
                </div>
            </div>

        </>
    )
}
