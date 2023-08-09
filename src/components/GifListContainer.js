import React ,{useEffect , useState} from "react";
import { createContext } from "react"


const GifListContainer = () =>{

    const{gitlist , setgiflist} = useEffect([])

    useEffect(()=>{
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=YOUR API KEY&rating=g" , {
          method: "GET" ,
          headers: {
            "Authorization": "EdEQ4Gzp3wsTAGjraFlB2u7523JnG4ES",
          }
        }) 
        
        .then(r => r.json())
        .then(data =>{
            console.log(data);
})
    })
}
export default  GifListContainer ;