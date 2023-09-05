import { useState } from "react";
import {
  Button,
  ItemList,
  MenuList,
  MydropDownButtonContainer,
  StyledButtonCompany,
} from "./stylesDropDownCompany";

const DropDownCompany = ({ name, items }) => {
  const [showListCompany, setShowListCompany] = useState(false);

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
    setShowListCompany(!showListCompany);
  };
  return (
    <MydropDownButtonContainer>
      <StyledButtonCompany
        onClick={handleClick}
        className={`${showListCompany ? "show" : ""}`}
      >
        <Button>{name}</Button>
        {showListCompany ? downArrow : upArrow}
      </StyledButtonCompany>

      <MenuList className={`${showListCompany ? "show" : ""}`}>
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
