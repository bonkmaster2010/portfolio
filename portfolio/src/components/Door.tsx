import { useNavigate } from "react-router";
import { useState } from "react";
import '../styles/Door.css';
import ltf from '../Untitled.jpg';

function Door() {
    const navi = useNavigate();

    return (
        <div id="door">
            <img 
                src={ltf} 
                alt="Door"
                onClick={() => navi("/home")}
            />
            <p id="enter">Enter?</p>
        </div>
    );
}

export default Door;
