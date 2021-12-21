import React from 'react';
import BackButton from '../../Components/Button/BackButton';
import ProfilePic from '../../Components/ProfilePicture/ProfilePic';
import Form from "../../Components/PersonalDataForm/Form";

function PersonalData(props) {
    return (
        <div className="container mx-auto page-wrapper">
            <br />
            <BackButton/>
            <h3 className="text-center text-page-title">Personal Data</h3>
            <section className="py-3 form-content">
                <ProfilePic/>
                {/* bisa diambil dari komponen page/register */}
                <Form/>
            </section>
        </div>
    );
}

export default PersonalData;