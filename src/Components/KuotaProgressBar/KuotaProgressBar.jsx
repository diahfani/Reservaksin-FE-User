import React from "react";

export function KuotaProgressBar({ capacity, fulfilled }) {
  const CalculatePercent = (now, cap) => {
    let result = (now / cap) * 100;
    let sisa = 100 - result;
    return sisa + "%";
  };
  let sisaKuota = capacity - fulfilled;
  let widthBar = CalculatePercent(fulfilled, capacity);

  return (
    <>
      <div className="progress mb-2 w-100" style={{ height: "1.2rem" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: widthBar,
            backgroundImage: "linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)",
            textAlign: "center",
            border: "1px",
          }}
          aria-valuenow={sisaKuota}
          aria-valuemin="0"
          aria-valuemax={capacity}
        ></div>
      </div>
    </>
  );
}
