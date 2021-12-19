import React from 'react';
import UserAvatar from '../../Components/Profile/UserAvatar';
import UserMenu from '../../Components/Profile/UserMenu';
import BackButton from '../../Components/Button/BackButton';

function UserProfilePage() {
    return (
        <div className="container mx-auto page-wrapper">
            <br />
            <BackButton/>
            <h3 className="text-center text-page-title">Profile</h3>
            <UserAvatar/>
            <UserMenu/>
        </div>
    )
}

export default UserProfilePage
