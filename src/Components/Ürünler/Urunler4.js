import React from "react";
import "./Urunler.css";
import HamburgerMenu from "../HamburgerMenu";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Urunler2 = () => {
  const { t, i18n } = useTranslation();

  function clickLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <>
      <div className="urunler-container">
        <nav>
          <NavLink to="/">
            <img
              className="logo-img"
              src="https://i.hizliresim.com/67ias4y.jpg"
            />
          </NavLink>

          <HamburgerMenu />
          <div className="language-container">
            <button onClick={() => clickLanguage("en")}>
              English
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg" />
            </button>
            <button onClick={() => clickLanguage("ar")}>
              عربى
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Arabic-Language-Flag.svg" />
            </button>
            <button onClick={() => clickLanguage("tr")}>
              Türkçe
              <img src="https://tolerance-homes.com/storage/images/pages/qP0fv1mqZpQwoJDnLJSeaxis4WhOye64LrbNaPet.jpeg" />
            </button>
          </div>
        </nav>
        <div className="urunler-line">
          <h2>{t("Urunler.1")} </h2>
          <div className="urunler-inner-line">
            <NavLink className="urunler-home" to="/">
              {t("KurumsalLinelink.1")}
            </NavLink>

            <MdKeyboardArrowRight className="urunler-inner-line-icon" />

            <span className="urunler-1">{t("Urunler.1")}</span>
          </div>
        </div>

        <div className="urunler-inner-container">
          <div className="iframe-container">
            <div className="iframe-inner-container">
              <iframe src="https://panel.360photoboxcloud.com/viewer360/viewer.html?id=9833768c"></iframe>
            </div>
            <div className="iframe-inner-container">
              <iframe src="https://panel.360photoboxcloud.com/viewer360/viewer.html?id=64474177"></iframe>
            </div>
            <div className="iframe-inner-container">
              <iframe src="https://panel.360photoboxcloud.com/viewer360/viewer.html?id=966ebac3"></iframe>
            </div>
            <div className="iframe-inner-container">
              <iframe src="https://panel.360photoboxcloud.com/viewer360/viewer.html?id=9244cdc2"></iframe>
            </div>
            <div className="iframe-inner-container">
              <iframe src="https://panel.360photoboxcloud.com/viewer360/viewer.html?id=25875c0d"></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="urunler-sayfa">
        <NavLink
          className="urunler-sayfa1"
          style={({ isActive }) => {
            return { color: isActive ? "#019EFF" : "black" };
          }}
          to="/urunler"
        >
          1
        </NavLink>
        <NavLink
          className="urunler-sayfa1"
          style={({ isActive }) => {
            return { color: isActive ? "#019EFF" : "black" };
          }}
          to="/urunlersayfa2"
        >
          2
        </NavLink>
        <NavLink
          className="urunler-sayfa1"
          style={({ isActive }) => {
            return { color: isActive ? "#019EFF" : "black" };
          }}
          to="/urunlersayfa3"
        >
          3
        </NavLink>
        <NavLink
          className="urunler-sayfa1"
          style={({ isActive }) => {
            return { color: isActive ? "#019EFF" : "black" };
          }}
          to="/urunlersayfa4"
        >
          4
        </NavLink>
      </div>
      <div className="footer2">
        <div className="footer-2">
          <img
            className="footer-img"
            src="https://i.hizliresim.com/67ias4y.jpg"
          />
          <p>{t("HomeFooter.1")}</p>
        </div>
        <div className="footer-11">
          <div className="footer-3">
            <h1>{t("HomeFooterh1.1")}</h1>
            <p>
              4.Organize Sanayi Bölgesi 83415 Sok. No:7 Başpınar, 27600
              Şehitkamil/Gaziantep
            </p>
          </div>
          <div className="footer-3">
            <h1>{t("HomeFooterh12.1")}</h1>
            <p>+90 539 526 95 34</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Urunler2;
