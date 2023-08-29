import { BsList } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { ContainerMenuBurguer } from "./menuStyles";

const MenuBurguer = ({ handleMenu, isActive }) => {
  return (
    <ContainerMenuBurguer onClick={handleMenu}>
      {isActive ? <IoCloseOutline /> : <BsList />}
    </ContainerMenuBurguer>
  );
};

export default MenuBurguer;
