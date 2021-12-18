import React from "react";
import { MdArrowBack } from "react-icons/md";
import {useNavigate} from "react-router-dom";
import "./Button.css";
function BackButton(props) {
    const navigate = useNavigate();
    return (
        <span className="float-left px-3 btn-back" onClick={() => navigate(-1)}><MdArrowBack style={{color:"#0A508D"}} size={27}/></span>
    );
}

export default BackButton;
