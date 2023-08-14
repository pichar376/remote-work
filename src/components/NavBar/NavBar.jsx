import DropDownFeatures from "../DropDownFeatures/DropDownFeatures";
import DropDownCompany from "../DropDownCompany/DropDownCompany";

import {
  ContainerLoggin,
  MenuLinks,
  NavBarStyled,
  SnapStyle,
} from "./stylesNavBar";
import MenuBurguer from "../MenuBurguer/MenuBurguer";
import { useState } from "react";

const NavBar = ({ active, setActive }) => {
  const handleMenu = () => {
    setActive(!active);
    console.log(active);
  };

  const itemsForCompany = ["History", "Our Team", "Blog"];
  return (
    <NavBarStyled>
      <SnapStyle>snap</SnapStyle>
      <MenuLinks className={`${active ? "active" : ""}`}>
        <DropDownFeatures
          name="Features"
          item1="todolist"
          item2="calendar"
          item3="reminders"
          item4="planning"
        />

        <DropDownCompany name="Company" items={itemsForCompany} />

        <a href="#">Careers</a>
        <a href="#">About</a>
        <ContainerLoggin>
          <a href="#" className="loggin-button">
            Loggin
          </a>
          <a href="#" className="register">
            <span>Register</span>
          </a>
        </ContainerLoggin>
      </MenuLinks>
      <MenuBurguer handleMenu={handleMenu} active={active} />
    </NavBarStyled>
  );
};

export default NavBar;
