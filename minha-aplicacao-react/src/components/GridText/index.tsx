import React from "react";
import Heading from "../Heading";
import SectionBackground from "../SectionBackground";
import TextComponent from "../TextComponent";
import * as Styled from "./styled";

interface GridItem {
  title: string;
  description: string;
}

interface GridTextProps {
  background?: boolean;
  title: string;
  description: string;
  grid: GridItem[];
  sectionId?: string;
}

const GridText: React.FC<GridTextProps> = ({
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
          {grid.map((el) => (
            <Styled.GridElement key={el.title}>
              <Heading size="medium" colorDark={!background} as="h3">
                {el.title}
              </Heading>
              <TextComponent>{el.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

export default GridText;
