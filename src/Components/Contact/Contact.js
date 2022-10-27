import React from "react";
import "./Contact.css";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();

  function clickLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <>
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

      <div className="contact-container">
        <div className="kurumsal-line">
          <h2> {t("HamburgerMenu.4")}</h2>
          <div className="kurumsal-inner-line">
            <NavLink className="kurumsal-home" to="/">
              {t("KurumsalLinelink.1")}
            </NavLink>

            <MdKeyboardArrowRight className="kurumsal-inner-line-icon" />

            <span className="kurumsal-1">{t("HamburgerMenu.4")}</span>
          </div>
        </div>
        <iframe
          className="contact-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.6386548632663!2d37.407436610435774!3d37.15138498210474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531fb3e2706febb%3A0xe1826d10bd6da215!2sEnder%20Plastik!5e0!3m2!1str!2str!4v1659700338488!5m2!1str!2str"
        ></iframe>
      </div>
      <hr />
      <div className="contact-container2">
        <div className="contact-inner-container2">
          <AiOutlineHome className="icons" />
          <h3>{t("Contact.1")}</h3>
          <a
            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.6386548632663!2d37.407436610435774!3d37.15138498210474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531fb3e2706febb%3A0xe1826d10bd6da215!2sEnder%20Plastik!5e0!3m2!1str!2str!4v1659700338488!5m2!1str!2str"
            target="_blank"
          >
            4.Organize Sanayi Bölgesi 83415 Sok. No:7 Başpınar, 27600
            Şehitkamil/Gaziantep
          </a>
        </div>
        <div className="vertical-line"></div>
        <div className="contact-inner-container2">
          <AiOutlinePhone className="icons" />
          <h3>{t("Contact.2")}</h3>
          <p>+90 539 526 95 34 </p>
        </div>
        <div className="vertical-line"></div>

        <div className="contact-inner-container2">
          <AiOutlineMail className="icons" />
          <h3>{t("Contact.3")}</h3>
          <p>osnsoft@gmail.com</p>
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
        <div className="footer-11 ">
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

export default Contact;
