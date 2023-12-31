import DropDownFeatures from "../DropDownFeatures/DropDownFeatures";
import DropDownCompany from "../DropDownCompany/DropDownCompany";

import {
  ContainerLogin,
  MenuLinks,
  NavBarStyled,
  SnapStyle,
} from "./stylesNavBar";
import MenuBurguer from "../MenuBurguer/MenuBurguer";

const NavBar = ({ isActive, setIsActive }) => {
  //these is the replace to items from DropDownFeatures Component
  const itemsToRender = ["todolist", "calendar", "reminders", "planning"];
  const handleMenu = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };
  //these is items that renderize the Component DropDownCompany
  const itemsForCompany = ["History", "Our Team", "Blog"];
  return (
    <NavBarStyled>
      <SnapStyle>snap</SnapStyle>
      <MenuLinks className={`${isActive ? "active" : ""}`}>
        <div className="links-container">
          <DropDownFeatures name="Features" items={itemsToRender} />

          <DropDownCompany name="Company" items={itemsForCompany} />

          <a href="#">Careers</a>
          <a href="#">About</a>
        </div>
        <ContainerLogin>
          <a href="#" className="login-button">
            Login
          </a>
          <a href="#" className="register">
            <span>Register</span>
          </a>
        </ContainerLogin>
      </MenuLinks>
      <MenuBurguer handleMenu={handleMenu} isActive={isActive} />
    </NavBarStyled>
  );
};

export default NavBar;
