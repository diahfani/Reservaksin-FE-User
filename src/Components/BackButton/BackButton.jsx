import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton({ title }) {
  const navigate = useNavigate();
  return (
    <div className="mb-2 d-flex align-items-center" style={{position: "relative"}}>
      <button
        className="btn btn-link p-0 text-decoration-none"
        onClick={() => navigate(-1)}
        style={{position: "absolute"}}
      >
        <span className="material-icons-outlined" style={{fontSize: "30px"}}>arrow_back</span>
      </button>
      <h4 className="text-center m-0 w-100">{title}</h4>
    </div>
  );
}

export default BackButton;
