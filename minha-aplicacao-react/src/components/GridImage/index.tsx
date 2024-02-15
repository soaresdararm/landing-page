import React from "react";
import Heading from "../Heading";
import SectionBackground from "../SectionBackground";
import TextComponent from "../TextComponent";
import * as Styled from "./styled";

interface GridImageProps {
  title: string;
  description: string;
  grid: { altText: string; srcImg: string }[];
  background?: boolean;
  sectionId?: string;
}

const GridImage: React.FC<GridImageProps> = ({
  title,
  description,
  grid,
  background = false,
  sectionId = "",
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el, index) => (
            <Styled.GridElement key={`${el.srcImg}${el.altText}${index}`}>
              <Styled.Image src={el.srcImg} alt={el.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

export default GridImage;
