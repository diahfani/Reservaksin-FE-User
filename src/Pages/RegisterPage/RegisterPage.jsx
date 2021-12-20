import React, { useState } from 'react'
import FormRegisterAwal from 'Components/FormRegister/FormRegisterAwal'
import 'Components/Button.css'
import 'index.css'
import './RegisterPage.css'
import Navbar from 'Components/Navbar/Navbar'


function RegisterPage({ nextStep, prevStep, handleInputData, formData }) {
    // const [err, setErr] = useState(false)
    return (
        // <>

        <div className="container mx-auto p-0 page-wrapper" >
            <div className="container mx-auto p-0">
                <Navbar></Navbar>
            </div>
            <div className='container page-wrapper ctr-content'>



                <div>
                    <FormRegisterAwal nextStep={nextStep} prevStep={prevStep} handleInputData={handleInputData} formData={formData} />
                </div>
                {/* <div className='container mt-5'>
                    <Button className='btn-style'>Lanjut</Button>
                </div> */}
            </div>
        </div>
        // </>
    )
}

export default RegisterPage
