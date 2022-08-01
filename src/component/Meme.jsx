import React from "react"
import "../style/Meme.css"
import memeData from "./MemeData.js"


export default function Meme(){

    function getMemeImage(){
        const memesArray=memeData.data.memes
       const randomNumber=Math.floor(Math.random() * memesArray.length)
       const url=memesArray[randomNumber].url;
       console.log(url)
    }
    return(
        <main >
            <form className="form">
                <input type="text" placeholder="Top text" className="form-input"/>
                <input type="text" placeholder="Bottom text" className="form-input"/>
                <button className="form-button" onClick={getMemeImage()}>Get a new meme image 🖼</button>
            </form>
        </main>
        
    )
}