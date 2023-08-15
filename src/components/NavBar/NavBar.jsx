import DropDownFeatures from "../DropDownFeatures/DropDownFeatures";
import DropDownCompany from "../DropDownCompany/DropDownCompany";

import {
  ContainerLoggin,
  MenuLinks,
  NavBarStyled,
  SnapStyle,
} from "./stylesNavBar";
import MenuBurguer from "../MenuBurguer/MenuBurguer";

const NavBar = ({ active, setActive }) => {
  //these is the replace to items from DropDownFeatures Component
  const itemsToRender = ["todolist", "calendar", "reminders", "planning"];
  const handleMenu = () => {
    setActive(!active);
    console.log(active);
  };
  //these is items that renderize the Component DropDownCompany
  const itemsForCompany = ["History", "Our Team", "Blog"];
  return (
    <NavBarStyled>
      <SnapStyle>snap</SnapStyle>
      <MenuLinks className={`${active ? "active" : ""}`}>
        <DropDownFeatures name="Features" items={itemsToRender} />

        <DropDownCompany name="Company" items={itemsForCompany} />

        <a>Careers</a>
        <a>About</a>
        <ContainerLoggin>
          <a className="loggin-button">Loggin</a>
          <a className="register">
            <span>Register</span>
          </a>
        </ContainerLoggin>
      </MenuLinks>
      <MenuBurguer handleMenu={handleMenu} active={active} />
    </NavBarStyled>
  );
};

export default NavBar;
