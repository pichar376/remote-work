import { styled } from "styled-components"

export const MydropDownButtonContainer = styled.div`
margin:2em 2em;
position:relative;
align-items:center;
input:hover{
      color:#000;
    }
svg:hover{
cursor:pointer;
}
@media(max-width:770px){
margin:0;
}
`



export const MenuList = styled.ul`
display:flex;
 visibility:${({ click }) => (click ? "visible" : "hidden")};
  opacity:${({ click }) => (click ? "1" : "0")};
 background-color: white;
 box-shadow: 0 0 1rem #00000025;
 border-radius:3px;
 position: absolute;
 flex-flow:column wrap;
 justify-content:space-evenly;
top:2rem;
width:5rem;
height:6rem;
left:0rem;
transition:all .3s ease-in;

    @media(max-width:770px){
  position:initial;
  display:block;
  visibility:${({ click }) => (click ? "visible" : "hidden")};
  opacity:${({ click }) => (click ? "1" : "0")};
  margin:0;
  height:auto;
  
  box-shadow:0 0 0;
   transform: translateX(-8rem);
  }
`

export const ItemList = styled.li`
list-style-type:none;
margin-left:-1.4rem;
font-size:15px;
@media(max-width:770px){
   display:flex;
   align-items:center;
     border-bottom:thin solid #00000025;
     width:20rem;;
     transition:all .2s ease-in;
    &:hover{
        background-color:#00000010;
}
}
`


export const StyledButtonCompany = styled.section`
display:flex;
align-items:center;
`

export const Button = styled.button`
border:none;
color:${({ click }) => (click ? "black" : "#00000075")};
margin-right:.5rem;
transition:all .3s ease-in-out;
&:hover{
      color:#000;
    }
@media(max-width:770px){
  background-color:transparent;
 &:hover{
 color:#000;
    }
}
`