import React from "react"
import "../style/Header.css"
import memelogo from "../image/troll-face.png"

const Header =()=>{
    return(
        <header className="header">
            <img src={memelogo} alt="" className="header-image"></img>
        <h2 className="header-title">Meme Generator</h2>
        <h4 className="header-content">React Course - Project 3</h4>
        </header>
    )
}


export default Header;