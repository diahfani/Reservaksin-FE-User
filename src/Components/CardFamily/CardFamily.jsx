import React from "react";
import { MdOutlineEdit, MdDelete } from "react-icons/md";
import "./Card.css";

function CardFamily({ data }) {
  return (
    <div>
      <div className="card card-family mb-3">
        <div className="d-flex justify-content-between p-2">
          <div className="card-text p-3">
                {data.nama}
            <span className="px-2">{data.status}</span>
          </div>
          <div className="card-actions my-auto">
            <button
              className="btn btn-success rounded-circle mx-2"
              onClick={() => {;
              }}
            >
              <MdOutlineEdit style={{ color: "white" }} />
            </button>
            <button
              className="btn btn-danger rounded-circle mx-2"
              onClick={() => {
              }}
            >
              <MdDelete style={{ color: "white" }} />
            </button>
          </div>
        </div>
      </div>
      </div>
  );
}

export default CardFamily;
