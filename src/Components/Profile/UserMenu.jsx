import React from "react";
import "./UserProfile.css";
import { Link } from "react-router-dom";
import { RiFolderHistoryLine,  } from "react-icons/ri";
import {TiGroupOutline} from "react-icons/ti";
import {BsFillPersonLinesFill} from "react-icons/bs";
import '../../Pages/index.css';

function UserMenu(props) {
  return (
      <>
      <div className="container-fluid item-container">
        <div className="item-menu mb-3 p-3">
          <Link to="/profile">
            <BsFillPersonLinesFill />
            <span className="text-menu">Personal Data</span>
          </Link>
        </div>
        <div className="item-menu mb-3 p-3">
          <Link to="/profile">
            <TiGroupOutline />
            <span className="text-menu">Family Member</span>
          </Link>
        </div>
        <div className="item-menu mb-3 p-3">
          <Link to="/profile">
            <RiFolderHistoryLine />
            <span className="text-menu">Histori</span>
          </Link>
        </div>
        <button className="btn btn-primary mt-3">Logout</button>
      </div>
      </>
  );
}

export default UserMenu;
