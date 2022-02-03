import React, { useState } from "react";
import BackButton from "../../Components/BackButton/BackButton";
import { Form } from "react-bootstrap";
import ProfilePic from "../../Components/ProfilePicture/ProfilePic";
import { useSelector, useDispatch } from "react-redux";
import CustomToast from "Components/CustomToast/CustomToast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setUser } from "Config/Redux/UserSlice";
import "./PersonalData.scss";

export default function PersonalData() {
  // declare new state or new variable below ...
  const dataUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formDataUser, setFormDataUser] = useState(dataUser?.data);
  const [validated, setValidated] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    body: <></>,
    delay: 0,
    headIcon: <></>,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const handleInput = (e) => {
    if (
      e.target.name === "alamat" ||
      e.target.name === "kelurahan" ||
      e.target.name === "kecamatan" ||
      e.target.name === "kota" ||
      e.target.name === "provinsi"
    ) {
      setFormDataUser({
        ...formDataUser,
        current_Address: {
          ...formDataUser.current_Address,
          [e.target.name]: e.target.value,
        },
      });
    } else {
      if (e.target.name === "nik") {
        const re = /^[0-9\b]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
          setFormDataUser({
            ...formDataUser,
            [e.target.name]: e.target.value,
          });
        }
      } else {
        setFormDataUser({
          ...formDataUser,
          [e.target.name]: e.target.value,
        });
      }
    }
  };

  const updateToAPI = async () => {
    await axios
      .put(
        `${process.env.REACT_APP_RESERVAKSIN_API_URL}/citizen/${formDataUser?.id}`,
        {
          ...formDataUser,
          nohp: dataUser?.nohp,
        }
      )
      .then((response) => {
        dispatch(setUser(response?.data?.data));
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      setToast({
        show: true,
        body: (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p style={{ fontSize: "1rem", marginTop: "1rem" }}>
              Proses edit data
            </p>
          </div>
        ),
        delay: 10000,
        headIcon: (
          <span className="material-icons-outlined text-secondary">
            hourglass_top
          </span>
        ),
      });
      setIsLoaded(true);
      await updateToAPI();
    }
    setValidated(true);
  };

  return (
    <div className="personal-data container mx-auto page-wrapper">
      <br />
      <BackButton title="Personal Data" />
      <section className="py-3 form-content">
        <ProfilePic />
        <section className="pt-3 mt-3 fam-content">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="mb-3 ctr-input ">
              <Form.Label>No. KK*</Form.Label>
              <Form.Control
                disabled
                placeholder="Masukkan no. KK"
                name="nokk"
                type="number"
                value={formDataUser?.nokk}
                required
              />
            </div>
            <div className="mb-3 ctr-input">
              <Form.Label>NIK*</Form.Label>
              <Form.Control
                placeholder="Masukkan NIK"
                name="nik"
                value={formDataUser?.nik}
                onChange={(e) => handleInput(e)}
                type="text"
                maxLength={16}
                required
              />
              <Form.Control.Feedback type="invalid">
                NIK tidak boleh kosong
              </Form.Control.Feedback>
            </div>
            <div className="mb-3 ctr-input">
              <Form.Label>Nama Lengkap*</Form.Label>
              <Form.Control
                placeholder="Masukkan nama lengkap"
                type="text"
                value={formDataUser?.fullname}
                onChange={(e) => handleInput(e)}
                name="fullname"
                required
              />
              <Form.Control.Feedback type="invalid">
                Nama lengkap tidak boleh kosong
              </Form.Control.Feedback>
            </div>
            <div className="mb-3 ctr-input">
              <Form.Label className="col-form-label">Jenis Kelamin*</Form.Label>
              <div className="d-flex">
                <div className="form-check form-check-inline me-5">
                  <Form.Check
                    type="radio"
                    name="gender"
                    value="Pria"
                    checked={formDataUser?.gender === "Pria"}
                    onChange={(e) => handleInput(e)}
                    required
                  />
                  <Form.Label className="form-check-label">Pria</Form.Label>
                </div>
                <div className="form-check form-check-inline ms-5">
                  <Form.Check
                    type="radio"
                    name="gender"
                    value="Wanita"
                    checked={formDataUser?.gender === "Wanita"}
                    onChange={(e) => handleInput(e)}
                    required
                  />
                  <label className="form-check-label">Wanita</label>
                </div>
              </div>
              <Form.Control.Feedback type="invalid">
                Pilih salah satu
              </Form.Control.Feedback>
            </div>
            <div className="mb-3 ctr-input date-input">
              <Form.Label>Tanggal Lahir *</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={formDataUser?.dob}
                onChange={(e) => handleInput(e)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Tanggal lahir tidak boleh kosong
              </Form.Control.Feedback>
            </div>
            <div className="mb-3 ctr-input">
              <Form.Label>Status Hubungan dalam Kartu Keluarga*</Form.Label>
              <Form.Select
                name="relationship"
                value={formDataUser?.relationship}
                onChange={(e) => handleInput(e)}
                required
              >
                <option value="" disabled>
                  Hubungan keluarga
                </option>
                <option value="anak">Anak</option>
                <option value="suami">Suami</option>
                <option value="istri">Istri</option>
                <option value="mertua">Mertua</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Pilih salah satu
              </Form.Control.Feedback>
            </div>
            <div className="mb-4 ctr-input">
              <Form.Label>Status Perkawinan*</Form.Label>
              <Form.Select
                value={formDataUser?.status}
                name="status"
                onChange={(e) => handleInput(e)}
                required
              >
                <option value="" disabled>
                  Status perkawinan
                </option>
                <option value="Belum Kawin">Belum Kawin</option>
                <option value="Kawin">Kawin</option>
                <option value="Cerai">Cerai</option>
                <option value="Cerai Mati">Cerai Mati</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Pilih salah satu
              </Form.Control.Feedback>
            </div>
            <Form.Label>Data Alamat</Form.Label>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed border"
                  style={{ borderRadius: "5px" }}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Lihat Data Alamat
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="mb-3 ctr-input">
                    <Form.Label>Alamat*</Form.Label>
                    <Form.Control
                      placeholder="Masukkan Alamat"
                      name="alamat"
                      value={formDataUser?.current_Address?.alamat}
                      onChange={(e) => handleInput(e)}
                      type="text"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Alamat tidak boleh kosong
                    </Form.Control.Feedback>
                  </div>
                  <div className="mb-3 ctr-input">
                    <Form.Label>Kelurahan/Desa*</Form.Label>
                    <Form.Control
                      placeholder="Masukkan Kelurahan"
                      name="kelurahan"
                      value={formDataUser?.current_Address?.kelurahan}
                      onChange={(e) => handleInput(e)}
                      type="text"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Kelurahan tidak boleh kosong
                    </Form.Control.Feedback>
                  </div>
                  <div className="mb-3 ctr-input">
                    <Form.Label>Kecamatan*</Form.Label>
                    <Form.Control
                      placeholder="Masukkan NIK"
                      name="kecamatan"
                      value={formDataUser?.current_Address?.kecamatan}
                      onChange={(e) => handleInput(e)}
                      type="text"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Kecamatan tidak boleh kosong
                    </Form.Control.Feedback>
                  </div>
                  <div className="mb-3 ctr-input">
                    <Form.Label>Kabupaten/Kota*</Form.Label>
                    <Form.Control
                      placeholder="Masukkan NIK"
                      name="kota"
                      value={formDataUser?.current_Address?.kota}
                      onChange={(e) => handleInput(e)}
                      type="text"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Kabupaten/Kota tidak boleh kosong
                    </Form.Control.Feedback>
                  </div>
                  <div className="mb-3 ctr-input">
                    <Form.Label>Provinsi*</Form.Label>
                    <Form.Control
                      placeholder="Masukkan NIK"
                      name="provinsi"
                      value={formDataUser?.current_Address?.provinsi}
                      onChange={(e) => handleInput(e)}
                      type="text"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Provinsi tidak boleh kosong
                    </Form.Control.Feedback>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-5">
              {isLoaded ? (
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Simpan"
              )}
            </button>
          </Form>
          <button
            className="btn btn-outline-primary w-100 mt-3"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </section>
        <CustomToast toast={toast} setToast={setToast} />
      </section>
    </div>
  );
}
