import React from "react"
import memesData from "../memesData.js"

export default function Meme() {


 const [meme, setMeme] = React.useState({
       topText: "",
       bottomText: "",
       randomImage: "http://i.imgflip.com/1bij.jpg" 
   })
   const [allMemeImages, setAllMemeImages] = React.useState(memesData)
   
    function getMemeImage() {
    const memesArray = allMemeImages.data.memes        
    const randomNumber = Math.floor(Math.random() * memesArray.length)       
     const url = memesArray[randomNumber].url        
     setMeme(prevMeme => ({ ...prevMeme, randomImage: url}))
    
    }    
    

    return (
        <main>
         <form className="form">
            <div>
                 <label> Top Text
                 <input type="text"
                   placeholder="shut up"
                   className="form-input"/>
                   </label>
            </div>
            <div>
                <label> Bottom Text
                    <input type="text" placeholder="and take my money"
                    className="form-input"/>
                  
                </label>
            </div>
            <button className="form-button"> Get a new meme image

            </button>  
         </form>   
        </main>
    )
}
