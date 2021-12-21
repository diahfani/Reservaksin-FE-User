import React from "react";
import { MdEdit } from "react-icons/md";
import "./Profile.css";

function ProfilePic(props) {
  return (
      <div className="profile-img-wrapper mx-auto">
        <img
          className="profile-img"
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          alt="profile-pic"
        />
        <MdEdit className="edit-icon"/>
      </div>
  );
}

export default ProfilePic;
