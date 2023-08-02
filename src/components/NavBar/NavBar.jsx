import DropDownFeatures from "../DropDownFeatures/DropDownFeatures";
import DropDownCompany from "../DropDownCompany/DropDownCompany";
import { BsList } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import {
  ContainerLoggin,
  ContainerMenuBurguer,
  MenuLinks,
  NavBarStyled,
  SnapStyle,
} from "./stylesNavBar";

const NavBar = ({ active, setActive }) => {
  const handleMenu = () => {
    setActive(!active);
  };
  return (
    <NavBarStyled>
      <SnapStyle className="snap">snap</SnapStyle>
      <MenuLinks active={active}>
        <DropDownFeatures
          name="Features"
          item1="todolist"
          item2="calendar"
          item3="reminders"
          item4="planning"
        />

        <DropDownCompany
          name="Company"
          item1="History"
          item2="Our Team"
          item3="Blog"
        />

        <a href="">Careers</a>
        <a href="">About</a>
        <ContainerLoggin>
          <a href="" className="loggin-button">
            Loggin
          </a>
          <a href="" className="register">
            <span>Register</span>
          </a>
        </ContainerLoggin>
      </MenuLinks>
      <ContainerMenuBurguer onClick={handleMenu}>
        {active ? <IoCloseOutline /> : <BsList />}
      </ContainerMenuBurguer>
    </NavBarStyled>
  );
};

export default NavBar;
