import { styled } from "styled-components"

export const NavBarStyled = styled.nav`
 display:flex;
 justify-content:space-between;
 width:100%;
 margin: 0 auto;
 font-size:14px;
 gap:1rem;
 align-items:center;
 
 a{
   margin: 0;
   transition:all .3s ease-out;
   text-decoration:none;
   color:#00000075;
   &:hover{
     color:#000;
     cursor:pointer;
    }
  }
  @media(min-width:770px){
    align-items:baseline;
    a{
      margin: 0;

    }
 }
  `
export const ContainerLoggin = styled.div`
display:flex;
flex-flow:column wrap;
gap:2rem;
justify-content:center;
align-items:center;
.register{
color: #00000075;
display:flex;
justify-content:center;
align-items:center;
border:thin solid gray;
height:2rem;
border-radius:10px;
width:8rem;
   &:hover{
    color:#00000050;
    font-weight:700;
   }
  }
@media(min-width:770px){
  margin-left:5rem;
  flex-flow:row nowrap;
  flex-grow:0; 
  gap:1rem;
  .register{
    width:6rem;
  }
  a{      
    margin:0;
    
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
  left:-500px;
  top:0;
  bottom:0;

  .links-container{
    display:flex;
    flex-flow:column nowrap;
    justify-content:center;
    align-items:center;
    gap:3rem;
  }

  a{
    color: #00000075;
   &:hover{
    color:#00000050;
    font-weight:700;
   }
  }
  &.active{
    left:0;
  }
  flex-flow:column wrap;
  align-items:center;
  justify-content:space-evenly;
   border-radius:0 15px 15px 0;
  transition:left .8s ease-in-out;
  z-index:999;

  @media(min-width:790px){
  display: flex;
  justify-content: space-between;
  flex-flow:row nowrap;
  height:auto;
  position: initial;
 flex-grow:1;

  .links-container{
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-between;
    align-items:center;
    gap:3rem;
   
    & :first-child{
      margin:0;
    }
  }
}
`
export const SnapStyle = styled.h1`
display:flex;
align-items: center;
font-weight: 700;
font-size:1.8rem;
font-weight:700;
`
