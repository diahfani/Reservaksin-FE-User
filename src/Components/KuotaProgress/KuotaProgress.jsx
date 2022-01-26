import React from "react";

function KuotaProgress() {
    const CalculatePercent = (now, cap) => {
        let result = (now / cap) * 100;
        let sisa = 100 - result;
        return sisa + "%";
    };
    const dataStaticKuota = {
        jmlPendaftar: 75,
        kapasitas: 100,
    };
    let sisaKuota = dataStaticKuota?.kapasitas - dataStaticKuota?.jmlPendaftar;
    let widthBar = CalculatePercent(
        dataStaticKuota.jmlPendaftar,
        dataStaticKuota.kapasitas
    );

    return (
        <>
            <div className="progress mx-3" style={{ height: "20px" }}>
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                        width: widthBar,
                        backgroundImage:
                            "linear-gradient(45deg, #0d5389, #74b9f5, #d4e3f3)",
                        textAlign: "center",
                    }}
                    aria-valuenow={sisaKuota}
                    aria-valuemin="0"
                    aria-valuemax={dataStaticKuota.kapasitas}
                ></div>
                <small
                    class="justify-content-center d-flex position-absolute w-100"
                    style={{ fontWeight: "bold", verticalAlign: "middle" }}
                >
                    tersisa {sisaKuota}
                </small>
            </div>
        </>
    );
}
export default KuotaProgress;
