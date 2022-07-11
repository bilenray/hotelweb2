import React from "react"
import { ReactDOM } from "react"
import {useState} from "react"
import "./Container2.css"
import "./tab.css"
import image from "./images/maldivesTravel.jpg"
import imagebg from "./images/weddingDecoration.jpg"
import { Parallax } from "react-parallax"

export default function Container2(){
    const [toggleState, setToggleState]= useState(1)
    const toggleTab =(index)=>{
        console.log(index);
        setToggleState(index);
    };
    
    return(
        <Parallax bgImage={imagebg} strength={500} className="tabContainer">
            <div className="cont2R1">
                first
            </div>
            <div className="bloc-tabs">
                <button className={toggleState===1? "tabs active-tabs":"tabs"}
                onClick={()=>toggleTab(1)}>Tab1
                </button>

                <button className={toggleState===2? "tabs active-tabs":"tabs"}
                onClick={()=>toggleTab(2)}>Tab2
                </button>

                <button className={toggleState===3? "tabs active-tabs":"tabs"}
                onClick={()=>toggleTab(3)}>Tab3
                </button>

                <button className={toggleState===4? "tabs active-tabs":"tabs"}
                onClick={()=>toggleTab(4)}>Tab4
                </button> 
            </div>
            <div className="content-tabs">
                <div className={toggleState===1? "content active-content": "content"}>
                    <img src={image} height="400px" width="500px" alt="This is picture"></img>
                    <div>
                        <h1>Tab1</h1>
                        <p>Hi, this is hotel where you spend money to stay and eat food.</p>
                    </div>
                </div>

                <div className={toggleState===2? "content active-content": "content"}>
                    <img src={image} height="400px" width="500px" alt="This is picture"></img>
                    <div>
                        <h1>Tab2</h1>
                        <p>Hi, this is hotel where you spend money to stay and eat food.</p>
                    </div>
                </div>

                <div className={toggleState===3? "content active-content": "content"}>
                    <img src={image} height="400px" width="500px" alt="This is picture"></img>
                    <div>
                        <h1>Tab3</h1>
                        <p>Hi, this is hotel where you spend money to stay and eat food.</p>
                    </div>
                </div>

                <div className={toggleState===4? "content active-content": "content"}>
                    <img src={image} height="400px" width="500px" alt="This is picture"></img>
                    <div>
                        <h1>Tab4</h1>
                        <p>Hi, this is hotel where you spend money to stay and eat food.</p>
                    </div>
                </div>

            </div>
        </Parallax>
    )
}
