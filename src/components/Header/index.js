import React from "react";
import {
  CustomLayoutHeader,
  HeaderButtonIcons,
  HeaderIcons,
  HeaderLogo,
  HeaderName,
  HeaderNav,
  HeaderNavItem,
} from "./styles";
import Home from "../../pages/Home";
import About from "../../pages/About";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Header = () => {
  return (
    <CustomLayoutHeader>
      <HeaderLogo to="/">
        <img src="/logo_web.png" alt="logo" />
        <HeaderName>Furniro</HeaderName>
      </HeaderLogo>

      <HeaderNav>
        <HeaderNavItem to="/" element={<Home />}>
          Home
        </HeaderNavItem>
        <HeaderNavItem to="/about" element={<About />}>
          About
        </HeaderNavItem>
      </HeaderNav>

      <HeaderIcons>
        <HeaderButtonIcons icon={<UserOutlined />} size="large" />
        <HeaderButtonIcons icon={<SearchOutlined />} size="large" />
        <HeaderButtonIcons icon={<HeartOutlined />} size="large" />
        <HeaderButtonIcons icon={<ShoppingCartOutlined />} size="large" />
      </HeaderIcons>
    </CustomLayoutHeader>
  );
};

export default Header;
