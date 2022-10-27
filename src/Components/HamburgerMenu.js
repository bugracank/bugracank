import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./HamburgerMenu.css";
import { useTranslation } from "react-i18next";

const COLORS = {
  primaryDark: "#115b4c",
  primaryLight: "#B6EDC8",
};

const MenuLabel = styled.label`
  background-color: transparent;
  position: fixed;
  top: 1rem;
  right: 5rem;
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
  @media screen and (max-width: 550px) {
    top: 1rem;
    margin-right: 1rem;
    height: 6rem;
    width: 6rem;
    box-shadow: none;
  }
  @media screen and (max-width: 700px) {
    top: 1rem;
    margin-right: -2rem;
    height: 6rem;
    width: 6rem;
    box-shadow: none;
  }
  @media screen and (max-width: 1050px) {
    top: 1rem;
    margin-right: -2rem;
    height: 6rem;
    width: 6rem;
    box-shadow: none;
  }
`;

const NavBackground = styled.div`
  position: fixed;
  top: 1rem;
  right: 6rem;
  background: rgba(41, 52, 98, 0.8);
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
  @media screen and (max-width: 550px) {
    height: 6rem;
    width: 6rem;
    top: 1rem;
    margin-right: -3rem;
    background: rgb(41, 52, 98);
  }
  @media screen and (max-width: 700px) {
    height: 6rem;
    width: 6rem;
    top: 1rem;
    margin-right: -3rem;
  }
  @media screen and (max-width: 1050px) {
    height: 6rem;
    width: 6rem;
    top: 1rem;
    margin-right: -3rem;
  }
`;

const Icon = styled.span`
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navigation = styled.nav`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
`;

function HamburgerMenu() {
  const { t, i18n } = useTranslation();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon className="hamburger-icon" clicked={click}>
          &nbsp;
        </Icon>
      </MenuLabel>
      <NavBackground className="nav-background" clicked={click}>
        &nbsp;
      </NavBackground>

      <Navigation className="ham-nav" clicked={click}>
        <ul className="list">
          <li>
            <NavLink className="navlink" onClick={handleClick} to="/">
              {t("HamburgerMenu.1")}
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" onClick={handleClick} to="/kurumsal">
              {t("HamburgerMenu.2")}
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" onClick={handleClick} to="/urunler">
              {t("HamburgerMenu.3")}
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" onClick={handleClick} to="/iletisim">
              {t("HamburgerMenu.4")}
            </NavLink>
          </li>
        </ul>
      </Navigation>
    </>
  );
}

export default HamburgerMenu;
