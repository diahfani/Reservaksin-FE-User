import React from "react";
import "./UserProfile.css";
import { Link } from "react-router-dom";
import { RiFolderHistoryLine } from "react-icons/ri";
import { TiGroupOutline } from "react-icons/ti";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Config/Redux/LoginSlice";
import { clearUser } from "Config/Redux/UserSlice";

function UserMenu({ userID }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClick = () => {
    dispatch(logout());
    dispatch(clearUser())
    navigate("/")
  };

  return (
    <div className="mt-5">
      <Link to={`/profile/${userID}/personal`} className="text-decoration-none">
        <div className="item-menu mb-3 p-3">
          <BsFillPersonLinesFill size="20" color="#0A508D" />
          <span className="text-menu">Personal Data</span>
        </div>
      </Link>
      <Link to={`/profile/${userID}/family`} className="text-decoration-none">
        <div className="item-menu mb-3 p-3">
          <TiGroupOutline size="20" color="#0A508D" />
          <span className="text-menu">Family Member</span>
        </div>
      </Link>
      <Link to={`/profile/${userID}/history`} className="text-decoration-none">
        <div className="item-menu mb-3 p-3">
          <RiFolderHistoryLine size="20" color="#0A508D" />
          <span className="text-menu">Histori</span>
        </div>
      </Link>
      <button className="btn btn-primary mt-5 w-100" onClick={onClick}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
