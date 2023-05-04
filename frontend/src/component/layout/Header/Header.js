import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.gif";
import { MdAccountCircle, MdSearch, MdAddShoppingCart } from "react-icons/md";

const options = {
  burgerColor: "rgb(224, 191, 184)",
  burgerColorHover: "rgb(243, 58, 106)",
  logo,
  logoWidth: "12vmax",
  navColor1: "rgb(250, 249, 246)",
  logoHoverSize: "10px",
  logoHoverColor: "rgb(25, 25, 112)",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "2vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",

  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "rgb(25, 25, 112)",
  searchIconColorHover: "rgb(25, 25, 112)",
  cartIconColorHover: "rgb(25, 25, 112)",
  cartIconMargin: "2vmax",
  profileIcon: true,

  ProfileIconElement: MdAccountCircle,
  searchIcon: true,

  SearchIconElement: MdSearch,
  cartIcon: true,

  CartIconElement: MdAddShoppingCart,
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
