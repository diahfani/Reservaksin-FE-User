import React from "react";
import "./LandingPage.scss";

import Navbar from "Components/Navbar/Navbar";
import HeroSection from "Components/HeroSection/HeroSection";
import SyaratVaksinSection from "Components/SyaratVaksinSection/SyaratVaksinSection";
import KriteriaVaksinSection from "Components/KriteriaVaksinSection/KriteriaVaksinSection";
import CaraVaksinasiSection from "Components/CaraVaksinasiSection/CaraVaksinasiSection";
import EfekVaksinSection from "Components/EfekVaskinSection/EfekVaksinSection";
import Footer from "Components/Footer/Footer";

export default function LandingPage() {
  return (
    <>
      <div className="landing-page container mx-auto p-0 page-wrapper">
        <Navbar isLoggedIn={false} />
        <HeroSection isLoggedIn={false} />
        <SyaratVaksinSection />
        <KriteriaVaksinSection />
        <CaraVaksinasiSection />
        <EfekVaksinSection />
        <Footer />
      </div>
    </>
  );
}
