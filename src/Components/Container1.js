import React from "react"
import { ReactDOM } from "react"
import "./Container1.css"
import { LoremIpsum } from 'react-lorem-ipsum';
import { loremIpsum, name, surname, fullname, username } from 'react-lorem-ipsum';
import bedRoom from "./images/bedRoom.jpg"

export default function Container1(){
    return(
        <div className="container1">
            <div className="cont1R1">
                <blockquote>Journey of Joy and fullnes starts
                from here. We care about you.
                </blockquote>
            </div>
            <div className="cont1R2">
                <h1>About Us</h1>
                <p>We are dedicate to provide you the service
                    that is utmost important for you. We are
                    one of the oldest and higly loved hotel
                    in Nepal.
                </p>
            </div>
            <div className="cont1R3">
                <h1>Explore more</h1>
                <div className="attraction">
                    <div className="attraction1">
                        <div>
                            <img src={bedRoom} height="300px" width="300px" alt="Bed Room"></img>
                        </div>
                        <figcaption>
                            <h1>Delicious food</h1>
                            <p>
                                Every food is cooked by Expert 
                                gourmet.
                            </p>
                            <div className="figprice">
                                <h2>Room Price: YYYY</h2>
                                <button>
                                    <a href="#">Know more</a>
                                </button>
                            </div>
                        </figcaption>
                    </div>
                    <div className="attraction2">
                        <div>
                            <img src={bedRoom} height="300px" width="300px" alt="Bed Room"></img>
                        </div>
                        <figcaption>
                            <h1>Delicious food</h1>
                            <p>
                                Every food is cooked by Expert 
                                gourmet.
                            </p>
                            <div className="figprice">
                                <h2>Room Price: YYYY</h2>
                                <button>
                                    <a href="#">Know more</a>
                                </button>
                            </div>
                        </figcaption>
                    </div>
                </div>
            </div>
        </div>
    )
}