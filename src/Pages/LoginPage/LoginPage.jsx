import React from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import "./LoginPage.css";
import BrandLogo from "../../Components/BrandLogo/BrandLogo";

function Login() {
  return (
    <div className="login-page d-flex flex-column py-5 page-wrapper">
      <BrandLogo />
      <LoginForm />
    </div>
  );
}

export default Login;
