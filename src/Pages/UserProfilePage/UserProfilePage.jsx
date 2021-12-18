import React from 'react';
import UserAvatar from '../../Components/Profile/UserAvatar';
import UserMenu from '../../Components/Profile/UserMenu';
import Navbar from '../../Components/Navbar/Navbar';
function UserProfilePage() {
    return (
        <div className="container mx-auto page-wrapper">
            <Navbar/>
            <h3 className="text-center pt-3">Profile</h3>
            <UserAvatar/>
            <UserMenu/>
        </div>
    )
}

export default UserProfilePage
