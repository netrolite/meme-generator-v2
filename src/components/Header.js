import React from "react";
import logo from "../media/logo.svg"

export default function Header() {
return (
        <nav className="header">
            <div className="logo-wrapper">
                <img src={logo} alt="logo" className="logo-img" />
                <h1 className="logo-text">Meme Generator v2</h1>
            </div>
            <h2 className="curr-project">
                React Course - Project 3    
            </h2>
        </nav>
    )
}