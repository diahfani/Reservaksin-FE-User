import React from "react";
import "./UserProfile.css";
import { Link } from "react-router-dom";
import { RiFolderHistoryLine } from "react-icons/ri";
import { TiGroupOutline } from "react-icons/ti";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Config/Redux/LoginSlice";

function UserMenu(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(logout());
    if (window.location.pathname.includes("profile")) {
      navigate("/");
    } else {
      window.location.reload();
    }
  };

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
          <Link to="/profile/id/family">
            <TiGroupOutline />
            <span className="text-menu">Family Member</span>
          </Link>
        </div>
        <div className="item-menu mb-3 p-3">
          <Link to="/profile/id/history">
            <RiFolderHistoryLine />
            <span className="text-menu">Histori</span>
          </Link>
        </div>
        <button className="btn btn-primary mt-3 btn-logout" onClick={onClick}>
          Logout
        </button>
      </div>
    </>
  );
}

export default UserMenu;
