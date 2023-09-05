import styled from "styled-components"

export const ContainerList = styled.ul`

  margin-top:1rem;
  position:initial;
  visibility:${({ showList }) => (showList ? "visible" : "hidden")};
  opacity:${({ showList }) => (showList ? "1" : "0")};
  height:auto;
  box-shadow:0 0 0;
  transform:translate(0); 
   transition:all .3s ease-in;

  @media(min-width:770px){
  margin:0;
  background-color: white;
  box-shadow: 0 0 1rem #00000025;
  position: absolute;
  text-align: center;
  flex-flow: column nowrap;
  transform: translateX(-1em);
  top: 2em;
  width:6rem;
  height:6rem;
  border-radius: 0.3em;
  list-style-type: none;
  padding:.3rem;
  visibility:${({ showList }) => (showList ? "visible" : "hidden")};
 opacity:${({ showList }) => (showList ? "1" : "0")};
  z-index: 999;
  
  &:hover{
  cursor:pointer;
} 
  }

  `


export const ItemList = styled.li`
       display:flex;
        justify-content:flex-start;
       border-bottom:thin solid #00000025;
       width:6rem;
       padding: 0.4em;
       gap:5px;
       transition:all .2s ease-in;
    &:hover{
        background-color:#00000010;   
       }

@media(min-width:770px){ 

  display: flex;
  border-bottom:none;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 0.2em;
}  
  `
export const StyledButtonFeatures = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 6em;
  border-radius: 2px;
button{
border:none;
background-color: transparent;
color:#00000075;
margin-right:.5rem;
color:${({ showList }) => (showList ? "#000" : "#00000075")};
transition:all .3s ease-in-out;
-webkit-tap-highlight-color: rgba(0,0,0,0);

&:hover{
      color:#000;
      cursor:pointer;
    }
    svg{
      margin-left:3rem;
       }
      &svg:hover{
        cursor:pointer;
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