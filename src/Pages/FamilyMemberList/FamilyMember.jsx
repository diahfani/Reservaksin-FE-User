import React from 'react';
import { FamilyData } from './StaticData';
import CardFamily from '../../Components/CardFamily/CardFamily';
import Navbar from '../../Components/Navbar/Navbar';

function FamilyMember(props) {
    return (
        <div className="container mx-auto page-wrapper">
            <Navbar/>
            {
                FamilyData.map((item) => (
                    <CardFamily key={item.id} data={item}/>
                ))
            }
        </div>
    );
}

export default FamilyMember;