import React from "react"
import { ReactDOM } from "react"
import "./Container4.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFaceAngry, faFaceFlushed, faFaceGrinBeam, faHotel, faLocationPin, faPhone} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const logo = <FontAwesomeIcon icon={faHotel} />

export default function Container4(){
    return(
        <div className="Container4">
            <p className="logo">{logo}</p>
            <div className="Cont4R2">
                <div>
                    <h1>About Hotel</h1>
                    <p>Descritpion of the Hotel
                        is given over here.<br/> If you want to know more<br/>
                        ..... <a href="#">Tap here</a>
                    </p>
                </div>
                <div>
                    <h1>Quick Links...</h1>
                    <ul>
                        <li>showroom</li>
                        <li>bedroom</li>
                        <li>Dining Room</li>
                        <li>Kitchen</li>
                    </ul>
                </div>
                <div>
                    <h1>Our Address</h1>
                    <ul>
                        <li>
                            <a href="mailto:abcd@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} style={{position:"relative"}} /> abcd@gmail
                            </a>
                        </li>
                        <li>
                            <a href="callto: +977 9888888888">
                                <FontAwesomeIcon icon={faPhone} style={{position:"relative"}} /> +977 98888888
                            </a>
                        </li>
                        <li>
                            <a href="goto:kathmandu">
                                <FontAwesomeIcon icon={faLocationPin} style={{position:"relative"}} /> Kathmandu
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>Social
                        <span style={{textDecorationColor:"red"}}> Media</span>
                    </h1>
                    <div className="mediaIcon">
                        <FontAwesomeIcon icon={faFaceAngry} />
                        <FontAwesomeIcon icon={faFaceFlushed} />
                        <FontAwesomeIcon icon={faFaceGrinBeam} />

                    </div>
                
                </div>
            </div>
        </div>
    )
}