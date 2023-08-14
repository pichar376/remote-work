import { useState } from "react";
import styledComponents from "styled-components";
import {
  Button,
  ItemList,
  MenuList,
  MydropDownButtonContainer,
  StyledButtonCompany,
} from "./stylesDropDownCompany.js";

const DropDownCompany = ({ name, items }) => {
  const [click, setClick] = useState(false);

  // arrows that will be after the button

  const downArrow = (
    <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
      <path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 5 4-4 4 4" />
    </svg>
  );

  const upArrow = (
    <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
      <path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4" />
    </svg>
  );

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <MydropDownButtonContainer onClick={handleClick}>
      <StyledButtonCompany click={click}>
        <Button>{name}</Button>
        {click ? downArrow : upArrow}
      </StyledButtonCompany>

      <MenuList click={click}>
        <div className="container-items">
          {items.map((el, index) => (
            <ItemList key={index}>{el}</ItemList>
          ))}
        </div>
      </MenuList>
    </MydropDownButtonContainer>
  );
};

export default DropDownCompany;
