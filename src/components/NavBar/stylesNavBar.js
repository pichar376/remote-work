import { styled } from "styled-components"

export const NavBarStyled = styled.nav`
width:100%;
display:flex;
align-items:center;
font-size:14px;
@media(max-width:770px){
  justify-content:space-between;
  align-items:baseline;
  .snap{
    font-size:45px;
  }
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

.snap{
font-weight: 700;
margin-right:1.5rem;
 margin-left:1rem;
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

`
export const ContainerMenuBurguer = styled.article`
 display:none;
  @media(max-width:770px){
    position:sticky;
    right:.5rem;
  display:block;
    font-size:50px;
    z-index:999;
  }
`
export const MenuLinks = styled.div`
width:100%;
display:flex;
justify-content:space-evenly;
align-items:center;
heigth:3rem;

@media(max-width:770px){
   position:absolute;
  background-color:white;
  width:60vw;
  top:0;
  right:${({ active }) => (active ? "0" : "-45rem")};
  bottom:0;
  display:flex;
  flex-flow:column wrap;
  align-items:center;
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


}

`

