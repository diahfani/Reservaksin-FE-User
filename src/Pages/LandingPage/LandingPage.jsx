import React, { useState } from "react";
import "./LandingPage.css";
import Navbar from "Components/Navbar/Navbar";
import HeroSection from "Components/HeroSection/HeroSection";
import SyaratVaksinSection from "Components/SyaratVaksinSection/SyaratVaksinSection";
import KriteriaVaksinSection from "Components/KriteriaVaksinSection/KriteriaVaksinSection";
import CaraVaksinasiSection from "Components/CaraVaksinasiSection/CaraVaksinasiSection";
import EfekVaksinSection from "Components/EfekVaksinSection/EfekVaksinSection";
import Footer from "Components/Footer/Footer";

export default function LandingPage() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1000) {
      setVisible(true);
    } else if (scrolled <= 1000) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <Navbar isLoggedIn={false} />
      <div className="landing-page container p-0 page-wrapper">
        <HeroSection isLoggedIn={true} />
        <SyaratVaksinSection />
        <KriteriaVaksinSection />
        <CaraVaksinasiSection />
        <EfekVaksinSection />
        <Footer />
        <div className="container">
          <button
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: 20,
              right: 20,
              opacity: visible ? 1 : 0,
              transition: "opacity ease-out 0.5s",
            }}
            className="btn btn-primary"
          >
            <span className="material-icons-outlined">arrow_upward</span>
          </button>
        </div>
      </div>
    </>
  );
}
