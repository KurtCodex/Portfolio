import React from "react"
import "../styles/burguerBtn.scss"


export const BurguerBtn = (props) => {
    return (
        <>
            <div onClick={props.handleClick}
                className={`icon nav-icon-6 ${props.clicked ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span className="span3"></span>
            </div >
        </>
    )
}
