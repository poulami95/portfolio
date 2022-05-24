import React, { useEffect, useState } from "react";
import "./Description.css";

const stringArr = ["Welcome to my portfolio website.","I'm Poulami Saha.","I'm a Software Developer.","I specialize in Web Development."]
const TypeWriter=(string,idx)=>{
    const [text,setText] = useState("");
    const [fullText,setFullText] = useState(string);
    const [index,setIndex] = useState(0);
    useEffect(()=>{
      if(index<fullText.length){
         setTimeout(()=>{
            setText(text+fullText[index])
            setIndex(index+1)
         },40);
      }
    },[index]);
    return text;
}
export default function Desciption(props){
    return<div className="description-wrapper">
        <div className="static-text">Hello!</div>
        <div className="dynamic-text blinking-cursor">
            {stringArr.map((item,index)=>{
                if(index < stringArr.length-1){
                    return <><span>{TypeWriter(item,index)}</span><br/></>
                }
                else{
                    return <span>{TypeWriter(item,index)}</span>
                }
            })}
        </div>
        {/* <ul className="dynamic-text">
            <li>I'm Poulami Saha</li>
            <li>I'm a Software Developer.</li>
            <li>I specialize in Web Development.</li>
        </ul> */}
    </div>
}