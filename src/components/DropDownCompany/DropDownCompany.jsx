import { useState } from "react";
import {
  Button,
  ItemList,
  MenuList,
  MydropDownButtonContainer,
  StyledButtonCompany,
} from "./stylesDropDownCompany";

const DropDownCompany = ({ name, items }) => {
  const [showList, setShowList] = useState("");

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
    setShowList((prevValue) => {
      return prevValue === "show" ? "" : "show";
    });
  };
  return (
    <MydropDownButtonContainer>
      <StyledButtonCompany onClick={handleClick} className={showList}>
        <Button>{name}</Button>
        {showList ? downArrow : upArrow}
      </StyledButtonCompany>

      <MenuList className={showList}>
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
