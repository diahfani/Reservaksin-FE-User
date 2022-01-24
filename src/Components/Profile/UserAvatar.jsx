import React from 'react';
import './UserProfile.css'
import { useSelector } from 'react-redux'
function UserAvatar(props) {
    const fullname = useSelector((state)=> state.user.fullname)
    // console.log(fullname)
    return (
        <div className="mt-3">
            <img
                className="rounded-circle user-profile-pic"
                src={'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'}
                alt=""
            />
            <span className="text-bold text-name">{fullname}</span>
        </div>
    );
}

export default UserAvatar;