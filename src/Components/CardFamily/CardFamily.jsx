import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { GetAge, ToCapitalize } from "Utilities/utils";

export default function CardFamily({ data }) {
  // declare new state or new variable below ...
  const navigate = useNavigate();

  // code your handle functions below ...
  const toEditFamilyData = () => {
    navigate("/family-member/edit", { state: { dataFamily: data } });
  };

  return (
    <div className="card card-family mb-4 shadow-sm" onClick={toEditFamilyData}>
      <div className="card-body">
        <span className="text-status st-waiting">
          {ToCapitalize(data?.relationship)}
        </span>
        <div>
          <h5>{data?.fullname}</h5>
          <p>NIK. {data?.nik}</p>
          <small>Usia {GetAge(data?.dob)} thn</small>
        </div>
      </div>
    </div>
  );
}
