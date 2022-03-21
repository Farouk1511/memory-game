import React from "react";
import "./nav.css"
const Nav = (props) => {

    return (
        <div className="nav-head">
            <h1>{props.title}</h1>
            <h3>{props.subHead}</h3>

            <div className="score">
                <span>Score: {props.score} </span>
                <span>High-Score: {props.highscore} </span>
            </div>
        </div>
    )
}

export default Nav