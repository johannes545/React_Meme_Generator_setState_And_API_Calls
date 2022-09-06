import React from "react";
import memeData from "./memeData";




function Maincontent(){

    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage(){
    const memeArray = memeData.data.memes
    const randomNum = Math.floor(Math.random() * memeArray.length)
    setMemeImage(memeArray[randomNum].url)
}


    return(
        <div className="Meme_Form">
            <input type="text" value="First line of the meme" />
            <input type="text" value="last line of the meme" />
            <button onClick={getMemeImage}>Get a new meme Image🖼</button>
            <img src={memeImage} />
        </div>
    )
}

export default Maincontent