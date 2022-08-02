import React from "react"
import "../style/Meme.css"
import memeData from "./MemeData.js"


export default function Meme(){

    const [memeUrl, memeUrlUpdate] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    });
    
    
    
    function getMemeImage(){
        const memesArray=memeData.data.memes
        const randomNumber=Math.floor(Math.random() * memesArray.length)
        
        memeUrlUpdate(prevValue=>({
            ...prevValue,
            randomImage:memesArray[randomNumber].url
        }));

    }
    return(
        <main >
            <div className="form">
                <input type="text" placeholder="Top text" className="form-input"/>
                <input type="text" placeholder="Bottom text" className="form-input"/>
                <button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
           <img src={memeUrl.randomImage} alt="" className="meme-image"></img>
        </main>
        
    )
}