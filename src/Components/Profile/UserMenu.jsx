import React from 'react';
import './UserProfile.css';
import {RiFolderHistoryLine} from 'react-icons/ri';
function UserMenu(props) {
    return (
        <div>
            <div className="row item-menu">
                <RiFolderHistoryLine/> <p className="text-item-menu">Personal Data</p>
            </div>
            <div className="row item-menu">
                <RiFolderHistoryLine/> <p className="text-item-menu">Family Member</p>
            </div>
            <div className="row item-menu">
                <RiFolderHistoryLine/> <p className="text-item-menu">Histori</p>
            </div>
        </div>
    );
}

export default UserMenu;