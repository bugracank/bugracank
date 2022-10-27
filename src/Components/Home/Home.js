import React from "react";
import HamburgerMenu from "../HamburgerMenu";
import Slider from "../Slider/Slider";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const { t, i18n } = useTranslation();

  function clickLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="home-container">
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
      <Slider className="slider-home" />

      <div className="home-urunler-container">
        <div className="home-urunler">
          <h2>{t("HomeUrunler.1")}</h2>
          <p>{t("HomeUrunlerp.1")}</p>
        </div>

        <div>
          <video
            className="home-video"
            controls
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop
          >
            <source
              src="https://api.360photoboxcloud.com/Resources/Downloads/123/photoboxplus_2022_8_4_14_1_46_381_cc29.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="home-urunler-image-container">
          <NavLink to="/urunler">
            <img
              className="home-img"
              src="https://i.hizliresim.com/21vvtbj.jpg"
            />
          </NavLink>
          <NavLink to="/urunler">
            <img
              className="home-img"
              src="https://i.hizliresim.com/hpl03t3.jpg"
            />
          </NavLink>
          <NavLink to="/urunler">
            <img
              className="home-img"
              src="https://i.hizliresim.com/ilyqs5g.jpg"
            />
          </NavLink>
          <NavLink to="/urunler">
            <img
              className="home-img"
              src="https://i.hizliresim.com/9ryxk7c.jpg"
            />
          </NavLink>
          <NavLink to="/urunler">
            <img
              className="home-img"
              src="https://i.hizliresim.com/oxx0f0y.jpg"
            />
          </NavLink>
          <NavLink to="/urunler">
            <img
              className="home-img"
              src="https://i.hizliresim.com/79kf6vn.jpg"
            />
          </NavLink>
          <NavLink to="/urunler">
            <img
              className="home-img"
              src="https://i.hizliresim.com/ju8kijs.jpg"
            />
          </NavLink>
          <NavLink to="/urunler">
            <img
              className="home-img"
              src="https://i.hizliresim.com/2hbtiw4.jpg"
            />
          </NavLink>
          <NavLink to="/urunler">
            <img
              className="home-img"
              src="https://i.hizliresim.com/lnau7ia.jpg"
            />
          </NavLink>
          {/* <NavLink to="/urunler">
            <img
              className="home-img"
              src="https://imgyukle.com/f/2022/07/15/V2e6Dy.jpg"
            />
          </NavLink>
          <NavLink to="/urunler">
            <img
              className="home-img"
              src="https://imgyukle.com/f/2022/07/15/V2e9ZM.jpg"
            />
          </NavLink> */}
          <NavLink to="/urunler">
            <img
              className="home-img"
              src="https://i.hizliresim.com/61zzk5n.jpg"
            />
          </NavLink>
          {/* <NavLink to="/urunler">
            <img
              className="home-img"
              src="https://imgyukle.com/f/2022/07/15/V23o0H.jpg"
            />
          </NavLink>
          <NavLink to="/urunler">
            <img
              className="home-img"
              src="https://imgyukle.com/f/2022/07/15/V23RxA.jpg"
            />
          </NavLink> */}
          {/* <NavLink to="/urunler">
            <img
              className="home-img"
              src="https://imgyukle.com/f/2022/07/15/V23nbI.jpg"
            />
          </NavLink> */}
        </div>
      </div>

      <div className="footer">
        <div className="footer-1">
          <img
            className="footer-img"
            src="https://i.hizliresim.com/67ias4y.jpg"
          />
          <p>{t("HomeFooter.1")}</p>
        </div>
        <div className="footer-4">
          <h1>{t("HomeFooterh1.1")}</h1>
          <p>
            4.Organize Sanayi Bölgesi 83415 Sok. No:7 Başpınar, 27600
            Şehitkamil/Gaziantep
          </p>
        </div>
        <div className="footer-4">
          <h1>{t("HomeFooterh12.1")}</h1>
          <p>+90 539 526 95 34</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
