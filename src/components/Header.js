import React from "react"
import photo1 from "../Images/photo1.png"

export default function Header() {
    return (
        <header>
           <img className="header--image" src={photo1}/>
            <h2 className="header--title">Meme generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}