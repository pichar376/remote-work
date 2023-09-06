import styled from "styled-components"


export const MydropDownButtonContainer = styled.div`
margin:0 2em;
position:relative;
align-items:center;
background-color: transparent;
 -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

&:hover{
  cursor:pointer;
}

input:hover{
      color:#000;
    }

    
@media(min-width:770px){
margin:0;

svg{
      margin-left:.5rem;
       }
}
`

export const MenuList = styled.div`

  display:block;
  visibility: hidden;
  opacity:0;
  margin-top:1rem;
  height:auto;
  width:5rem;
  height:6rem;  
  box-shadow:0 0 0;
  transform: translateX(-.7rem);
  transition:opacity .3s ease-in;
  
   &.show{
     visibility:visible;
     opacity:1;
   }

@media(min-width:790px){  
     background-color: white;
     box-shadow: 0 0 1rem #00000025;
     border-radius:3px;
     position: absolute;
     flex-flow:column nowrap;
     justify-content:space-evenly;
     top:1rem;
     left:0rem;

.container-items{ 
  height:100%;
  display:flex;
  position:relative;
  flex-direction:column;
  justify-content:space-evenly;
}
}
&>p{
  position:absolute;
  top:1rem;
}
 `

export const ItemList = styled.p`
padding:0 .3rem;
font-size:15px;
@media(max-width:770px){
   display:flex;
   align-items:center;
   border-bottom:thin solid #00000025;
   width:5.5rem;
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
background-color: transparent;
color:#00000075;
margin-right:.5rem;
&:hover{
      color:#000;
      cursor:pointer;
    }

    
`