import React from "react";
import FormDataKeluarga from "Components/FormDataKeluarga/FormDataKeluarga";

function AccordionFormDataKeluarga({
  idx,
  id,
  formdataAnggota,
  handleDeleteAnggotaKeluarga,
  handleInputDataAnggota,
  handleInputTglLahirAnggota,
  formDataNoKK,
  setFormData
}) {
  return (
    <div className="container p-0 ">
      <div className="accordion-item">
        <h2 className="accordion-header" id={`heading${idx + 1}`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${idx + 1}`}
            aria-expanded="false"
            aria-controls={`collapse${idx + 1}`}
          >
            Anggota Keluarga {idx + 1}
          </button>
        </h2>
        <div
          id={`collapse${idx + 1}`}
          className="accordion-collapse collapse"
          aria-labelledby={`heading${idx + 1}`}
        >
          <div
            className="accordion-body"
            style={{ paddingLeft: "0px", paddingRight: "0px" }}
          >
            <FormDataKeluarga
              formdataAnggota={formdataAnggota}
              id={id}
              handleInputDataAnggota={handleInputDataAnggota}
              handleInputTglLahirAnggota={handleInputTglLahirAnggota}
              formDataNoKK={formDataNoKK}
              
              setFormData={setFormData}
            />
            <button
              className="btn btn-danger w-100"
              onClick={() => handleDeleteAnggotaKeluarga(id)}
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccordionFormDataKeluarga;
