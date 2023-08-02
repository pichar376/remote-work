import { styled } from "styled-components";

export const MainContainerStyled = styled.div`
width:80%;
height: 50%;
display:flex;
flex-direction:column;
align-items:center;
justify-content: space-between;
margin:4rem auto;
@media(min-width:770px){
  flex-direction:row;
}
@media(min-width:960px){
 min-height:60%;
}
  
`

export const FigureStyled = styled.div`
display: flex;
justify-content: center;
width:100%;
height:100%;

img{
  max-width:100%;
  min-width:200px;
  height:auto;
}
@media(min-width:770px){
  order:1;
  justify-content: center;
}
`
export const MakeSectionStyle = styled.div`

  width:50%;
  height:100%;
  display:flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  order:2;
  gap:2rem;
  width:100%;
  align-items: center;

@media(min-width:770px){

  order:1;
justify-content: space-between;
align-items:flex-start;
  

}


`

export const TitleSectionStyle = styled.div`
   
        display: flex;
        margin-top:1rem;
        justify-content:center;
        gap:.6rem;  
        width:100%;
      >*{
        font-size:1.6rem;
        line-height: 2rem;
        font-weight:700;
      }
      
      
      @media(min-width:770px){
        gap:1rem;
        margin-top:3rem;
        display: flex;
      flex-direction: column;
      justify-content:flex-end;
      >*{
        font-size:2.5rem;
      }
      }
     @media(min-width:960px){
      >*{

        font-size:3.5rem;
      }
      }      
`
export const InfoSectionStyle = styled.div`
  text-align:center;
   @media(min-width:770px){
  text-align:left ;
   }
`
export const ContainerButton = styled.div`   
height:25%;
display:block;

`
export const ButtonLearnMore = styled.button`
     width:6rem;
     padding:.5rem;
     border-radius:10px;
     border-style:none;
     color:#fff;
     font-size:12px;
     background-color:#000;
     font-weight:600;

`

export const ContainerImagesStyle = styled.div`
width:80%;
display: flex;
justify-content: space-between;

&>div{
  display:flex;
  align-items:center;
  width:4rem;
 
  
  img{
    width:100%;
    height:auto;
  }
}
`



