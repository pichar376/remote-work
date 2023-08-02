import imageDesktop from "../../assets/image-hero-desktop.png";
import {
  ButtonLearnMore,
  ContainerButton,
  ContainerImagesStyle,
  FigureStyled,
  InfoSectionStyle,
  MainContainerStyled,
  MakeSectionStyle,
  TitleSectionStyle,
} from "./stylesMainContainer";
import databiz from "../../assets/client-databiz.svg";
import audio from "../../assets/client-audiophile.svg";
import meet from "../../assets/client-meet.svg";
import maker from "../../assets/client-maker.svg";

const MainContainer = () => {
  return (
    <MainContainerStyled>
      <MakeSectionStyle>
        <TitleSectionStyle>
          <h1>Make</h1>
          <h2>remote work</h2>
        </TitleSectionStyle>
        <InfoSectionStyle>
          <p>
            Get your team in sync,no matter your location.
            <br />
            Streamline processes,create teams rituals,and <br />
            watch productivity soar.
          </p>
        </InfoSectionStyle>
        <ContainerButton>
          <ButtonLearnMore>Learn more</ButtonLearnMore>
        </ContainerButton>
        <ContainerImagesStyle style={{ display: "flex" }}>
          <div>
            <img src={databiz} alt="databiz" />
          </div>
          <div>
            <img src={audio} alt="audio" />
          </div>
          <div>
            <img src={meet} alt="meet" />
          </div>
          <div>
            <img src={maker} alt="maker" />
          </div>
        </ContainerImagesStyle>
      </MakeSectionStyle>
      <FigureStyled>
        <img src={imageDesktop} />
      </FigureStyled>
    </MainContainerStyled>
  );
};

export default MainContainer;
