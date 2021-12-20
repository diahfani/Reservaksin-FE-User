import React from 'react'
import { Stepper } from 'react-form-stepper'
import logo from 'Assets/Frame.svg'
import { Button } from 'react-bootstrap'

function Submit({
    nextStep,
    prevStep,
    formData,
    formdataAnggota
}) {
    const handleSubmit = e => {
        console.log(formData)
        console.log(formdataAnggota)
        e.preventDefault()
    }
    return (
        <div className="container mx-auto page-wrapper p-0">
            <div className='container page-data-pribadi' >
                <div className='container'>
                    <Stepper steps={[{ label: 'Data Pribadi' }, { label: 'Alamat' }, { label: 'Data Keluarga' }]}
                        connectorStateColors={true}
                        activeStep={3}></Stepper>
                </div>
                <div className='container' style={{ marginTop: '100px' }} >
                    <img src={logo} alt='...' />
                    <h4 >Pastikan Data yang Anda Input Sudah Benar</h4>
                </div>
                <div className='container'>
                    <form onSubmit={handleSubmit} className='container' style={{ marginTop: '250px' }}>
                        <div  className='container mt-5 mb-2 p-0'>
                            <Button type='submit' className='btn-style'>Submit</Button>
                        </div>
                        <div className='container mt-2 mb-3 p-0'>
                            <Button onClick={prevStep} className="btn-style-prev" variant="outline-primary">Kembali</Button>
                        </div>
                    </form>
                    {/* <form>
                        <DataPribadiComponent />
                        
                    </form> */}
                </div>
            </div>
        </div>
    )
}

export default Submit
