import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export default function CustomToast({ toast, setToast }) {
  return (
    <ToastContainer
      className="p-3"
      position={"middle-center"}
      style={{ display: "" }}
    >
      <Toast
        onClose={() =>
          setToast({
            show: false,
            message: <></>,
          })
        }
        show={toast?.show}
        delay={toast?.delay}
        autohide
      >
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Reservaksin</strong>
          {toast?.headIcon}
        </Toast.Header>
        <Toast.Body
          style={{ height: "auto", backgroundColor: "rgba(255,255,255,.9)" }}
        >
          {toast?.body}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
