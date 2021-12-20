import React, {useState} from 'react'
import { Stepper } from 'react-form-stepper'
import 'index.css'
import './DataKeluarga.css'
import { Button } from 'react-bootstrap'
import { v4 as uuidv4 } from "uuid";
import AccordionFormDataKeluarga from 'Components/AccordionFormDataKeluarga/AccordionFormDataKeluarga'

function DataKeluarga({
    nextStep,
    prevStep,
    setListAnggota,
    // dataAnggota
}) {
    const dataAnggota = ({
        id: uuidv4(),
        nokk: 0,
        nik: 0,
        namalengkap: "",
        jeniskelamin: "",
        // tglLahir: (new Date()),
        tglLahir: "",
        statusHubungan: "",
        statusPerkawinan: "",
    })

    
    const [formdataAnggota, setformdataAnggota] = useState([dataAnggota])
    
    // const [accordion, setaccordion] =useState([formdataAnggota])

    const handleInputDataAnggota = (id, e) => {
        setformdataAnggota(
            formdataAnggota.map((item, index) => {
                if (item.id === id) {
                    item[index] = { ...item, [e.target.name]: e.target.value };
                    return item[index];
                }
                return item;
            })
        );
    };

    const handleDeleteAnggotaKeluarga = (id) => {
        const filt = formdataAnggota.filter((item) => item.id !== id)
        setformdataAnggota(filt)
    }
    // const handlechange = (id, e) => {
    //     setaccordion(
    //         accordion.map((item, index) => {
    //             if(item.id === id) {
    //                 item[index] = {...item, [e.target.name]: e.target.value}
    //                 return item[index]
    //             }
    //             return item
    //         })
    //     )
    // }

    // const handleDelete = (id) => {
    //     const filt = accordion.filter((item) => item.id !== id)
    //     setaccordion(filt)
    // }

    const handleSubmit = () => {
        setListAnggota(formdataAnggota)
        nextStep()
        
    }

    console.log(formdataAnggota)
    return (
        // <div>
        <div className="container mx-auto page-wrapper p-0">
            <div className='container page-data-pribadi' >
                <div className='container'>
                    <Stepper steps={[{ label: 'Data Pribadi' }, { label: 'Alamat' }, { label: 'Data Keluarga' }]}
                        connectorStateColors={true}
                        activeStep={3}></Stepper>
                </div>
                <div className='container'>
                    <div className='accordion' id='accordionExample'>
                        {formdataAnggota.map((item, idx) => (
                            <AccordionFormDataKeluarga 
                            key={item.id}
                            idx={idx}
                            id={item.id}
                            formdataAnggota={item}
                            setformdataAnggota={setformdataAnggota}
                            handleDeleteAnggotaKeluarga={handleDeleteAnggotaKeluarga}
                            handleInputDataAnggota={handleInputDataAnggota}/>
                        ))}
                        {/* <div className='container'> */}
                        <Button className='btn btn btn-primary w-100'
                        onClick={() => {
                            setformdataAnggota([...formdataAnggota, {...dataAnggota, id: uuidv4()}])
                            // console.log(formdataAnggota)
                        }}>
                        Tambah Anggota
                        </Button>
                    {/* </div> */}
                    </div>
                    
                    
                    <div className='container'>
                        <div className='container mt-3 mb-2 p-0'>
                            <p className='lewati-button' onClick={nextStep}>Lewati</p>
                        </div>
                        <div className='container mt-3 mb-2 p-0'>
                            <Button onClick={handleSubmit} className='btn-style'>Lanjut</Button>
                        </div>
                        <div className='container mt-2 mb-3 p-0'>
                            <Button className="btn-style-prev" onClick={prevStep} variant="outline-primary">Kembali</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        // </div>
    )
}

export default DataKeluarga
