import React from 'react';
import UserAvatar from '../../Components/Profile/UserAvatar';
import UserMenu from '../../Components/Profile/UserMenu';
import '../index.css';

function UserProfilePage() {
    return (
        <div className="container mx-auto page-wrapper">
            <h3 className="text-center pt-3">Profile</h3>
            <UserAvatar/>
            <UserMenu/>
        </div>
    )
}

export default UserProfilePage
