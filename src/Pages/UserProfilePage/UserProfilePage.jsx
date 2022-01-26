import React from "react";
import UserAvatar from "../../Components/Profile/UserAvatar";
import UserMenu from "../../Components/Profile/UserMenu";
import BackButton from "../../Components/BackButton/BackButton";
import { useSelector } from "react-redux";

export default function UserProfilePage() {
  const { data: dataUser } = useSelector((state) => state.user);
  return (
    <div className="container py-4 page-wrapper">
      <BackButton title="Profile" />
      <UserAvatar userName={dataUser?.fullname} />
      <UserMenu userID={dataUser?.id} />
    </div>
  );
}
