import { styled } from "styled-components"

export const NavBarStyled = styled.nav`
 display:flex;
 justify-content:space-between;
 width:100%;
 margin: 0 auto;
 font-size:14px;
 gap:1rem;
 align-items:center;
 
 @media(min-width:770px){
  align-items:baseline;
}
a{
  margin: 2em 2em;
  transition:all .3s ease-out;
  text-decoration:none;
  color:#00000075;
  &:hover{
    color:#000;
  }
  @media(max-width:770px){
      margin:0;
    }
}
  `
export const ContainerLoggin = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
 flex-grow:1;
 .register{
      display:flex;
justify-content:center;
align-items:center;
  border:thin solid gray;
    width:5rem;
    height:2rem;
    border-radius:10px;

 }

@media(max-width:770px){
  flex-grow:0; 
  flex-flow:column wrap;
    gap:2rem;
  
  .register{      
    &:hover{
     border:thin solid;
     color:#000;
    }
  }
}
`
export const MenuLinks = styled.div`
width:55%;
display:flex;
align-items:center;
   position:absolute;
  background-color:white;
  top:0;
  bottom:0;
  right: 0;
  flex-flow:column wrap;
  align-items:center;
  transform:translateX(25rem);
  justify-content:space-evenly;
   border-radius:15px 0 0 15px;
  transition:all .8s ease-in-out;
  z-index:999;

  
  
  a,.register{
    color: #00000075;
   &:hover{
    color:#00000050;
    font-weight:700;
   } 
  }
  @media(max-width:770px){
    &.active{
   transform:translateX(0);
}
  }
   @media(min-width:790px){
  display: flex;
  width:100%;
  flex-flow:row wrap;
  height:auto;
  position: initial;
} 
`
export const SnapStyle = styled.h1`
display:flex;
align-items: center;
font-weight: 700;
margin-right:1.5rem;
font-size:1.8rem;
font-weight:700;
`
