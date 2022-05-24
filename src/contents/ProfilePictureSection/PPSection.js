import React from "react";
import displayPicture from "../../assets/icon-image.jpg";
import "./PPSection.css"


export default function PPSection(props){
    return<div className="ppsection-wrapper">
        <img src={displayPicture} alt="" className="pp-image-wrapper"/>
    </div>
}