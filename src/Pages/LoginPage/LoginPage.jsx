import React from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import "./LoginPage.css";
import BrandLogo from "../../Components/BrandLogo/BrandLogo";
import BackButton from "Components/BackButton/BackButton";

function Login() {
  return (
    <div className="login-page py-4 page-wrapper">
      <BackButton title="Login" />
      <div className="pt-5">
        <BrandLogo />
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
