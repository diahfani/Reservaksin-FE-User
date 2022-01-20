import React from "react";
import UserAvatar from "../../Components/Profile/UserAvatar";
import UserMenu from "../../Components/Profile/UserMenu";
import BackButton from "../../Components/BackButton/BackButton";

function UserProfilePage({userid}) {
  return (
    <div className="container py-4 page-wrapper">
      <BackButton title="Profile"/>
      <UserAvatar />
      <UserMenu userid={userid} />
    </div>
  );
}

export default UserProfilePage;
