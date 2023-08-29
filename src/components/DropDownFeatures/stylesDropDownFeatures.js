import { styled } from "styled-components"

export const ContainerList = styled.ul`
background-color: white;
  box-shadow: 0 0 1rem #00000025;
  position: absolute;
  text-align: center;
  flex-flow: column nowrap;
  transform: translateX(-1em);
  top: 2em;
  width: 7em;
  height: 9em;
  border-radius: 0.3em;
  list-style-type: none;
  padding: 0;
   visibility:hidden;   
  opacity:0;
  z-index: 999;
  transition:all .3s ease-in;

  &:hover{
  cursor:pointer;
}

  &.show{
    visibility:visible;    
    opacity:1;
  }
  @media(max-width:770px){
  position:initial;
  visibility:${({ click }) => (click ? "visible" : "hidden")};
  opacity:${({ click }) => (click ? "1" : "0")};
  margin-top:1rem;
  height:auto;
  box-shadow:0 0 0;
  transform:translate(0);
  }

  `


export const ItemList =
  styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 0.2em;


   @media(max-width:770px){ 
    display:flex;
    justify-content:flex-start;
     border-bottom:thin solid #00000025;
     width:6rem;
    gap:5px;
   transition:all .2s ease-in;
    &:hover{
        background-color:#00000010;
    }}
  
  `
export const StyledButtonFeatures = styled.section`
display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 6em;
  border-radius: 2px;
input{
border:none;
color:#00000075;
margin-right:.5rem;
transition:all .3s ease-in-out;
background-color: transparent;
&.show{
  color:black;
}
&:hover{
      color:#000;
      cursor:pointer;
    }
    svg{
      margin-left:3rem;
       }
      & svg:hover{
        cursor:pointer;
      }
@media(max-width:770px){
  background-color:transparent;
      &:hover{
      color:#000;
    }
}
}

`

export const MydropDownContainer = styled.div`
margin:2em 2em;
position:relative;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
transition:all .3s ease-in;
background-color: transparent;
`