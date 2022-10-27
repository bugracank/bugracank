import React from "react";
import HamburgerMenu from "../HamburgerMenu";
import "./Kurumsal.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowRight } from "react-icons/md";

const Kurumsal = () => {
  const { t, i18n } = useTranslation();

  function clickLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
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

      <div className="kurumsal-container">
        <div className="kurumsal-line">
          <h2>{t("KurumsalLineh2.1")} </h2>
          <div className="kurumsal-inner-line">
            <NavLink exact to="/" className="kurumsal-home">
              {t("KurumsalLinelink.1")}
            </NavLink>

            <MdKeyboardArrowRight className="kurumsal-inner-line-icon" />

            <span className="kurumsal-1">{t("KurumsalLineh2.1")}</span>
          </div>
        </div>
        <div className="kurumsal-video-cont">
          <iframe
            className="kurumsal-video"
            controls
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop
            src="https://www.youtube.com/embed/nGaafxjCYNQ"
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
        <hr className="krmsl-line" />

        <div className="kurumsal-inner-container1">
          <img
            className="kurumsal-img"
            src="https://i.hizliresim.com/32ib1k8.jpg"
          />
          <div>
            <h1>{t("KurumsalHakkımızda.1")}</h1>
            <p>{t("KurumsalHakkımızdap.1")}</p>
          </div>
        </div>
        <hr className="krmsl-line" />
        <div className="kurumsal-inner-container2">
          <div>
            <h1>{t("KurumsalHakkımızdahedef.1")}</h1>
            <p>{t("KurumsalHakkımızdahedefp.1")}</p>
          </div>
          <img
            className="kurumsal-img"
            src="https://i.hizliresim.com/l8eqyti.jpg"
          />
        </div>
        <hr className="krmsl-line" />
        <div className="kurumsal-inner-container3">
          <img
            className="kurumsal-img"
            src="https://i.hizliresim.com/9ryritl.jpg"
          />
          <div>
            <h1>{t("Production.1")}</h1>
            <p>{t("Production.2")}</p>
          </div>
        </div>
      </div>
      <div className="footer-kurumsal">
        <div className="footer-1">
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
    </div>
  );
};

export default Kurumsal;
