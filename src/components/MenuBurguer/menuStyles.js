import { styled } from "styled-components";

export const ContainerMenuBurguer = styled.article`
display:flex;
font-size:3rem;
z-index:999;
@media(min-width:450px){
    font-size:4rem;
  }
@media(min-width:790px){
    display:none;
  }
`

