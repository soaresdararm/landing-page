import React from "react";
import Heading from "../Heading";
import SectionBackground from "../SectionBackground";
import TextComponent from "../TextComponent";
import * as Styled from "./styled";

interface GridTwoColumnProps {
  title: string;
  text: string;
  srcImg: string;
  background?: boolean;
}

const GridTwoColumn: React.FC<GridTwoColumnProps> = ({
  title,
  text,
  srcImg,
  background = false,
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container background={background}>
        <Styled.TextContainer>
          <Heading uppercase>{title}</Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

export default GridTwoColumn;
