import React from 'react';
import { FamilyData } from './StaticData';
import CardFamily from '../../Components/CardFamily/CardFamily';
import BackButton from '../../Components/Button/BackButton';

function FamilyMember(props) {
    return (
        <div className="container mx-auto page-wrapper">
            <br />
            <BackButton/>
            <h3 className="text-center text-page-title">Family Member</h3>
            <section className="py-3 fam-content">
            {
                FamilyData.map((item) => (
                    <CardFamily key={item.id} data={item}/>
                ))
            }
            </section>
        </div>
    );
}

export default FamilyMember;