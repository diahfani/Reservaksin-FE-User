import React from "react";
import UserAvatar from "../../Components/Profile/UserAvatar";
import UserMenu from "../../Components/Profile/UserMenu";
import BackButton from "../../Components/BackButton/BackButton";

function UserProfilePage() {
  return (
    <div className="container py-4 page-wrapper">
      <BackButton title="Profile"/>
      <UserAvatar />
      <UserMenu />
    </div>
  );
}

export default UserProfilePage;
