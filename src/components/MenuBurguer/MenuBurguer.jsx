import { BsList } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { ContainerMenuBurguer } from "./menuStyles";

const MenuBurguer = ({ handleMenu, active }) => {
  return (
    <ContainerMenuBurguer onClick={handleMenu}>
      {active ? <IoCloseOutline /> : <BsList />}
    </ContainerMenuBurguer>
  );
};

export default MenuBurguer;
