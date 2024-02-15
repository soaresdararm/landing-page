import React, { ReactNode } from "react";
import SectionContainer from "../SectionContainer";
import * as Styled from "./styled";

interface SectionBackgroundProps {
  children: ReactNode;
  background?: boolean;
  sectionId?: string;
}

const SectionBackground: React.FC<SectionBackgroundProps> = ({
  children,
  background = false,
  sectionId = "",
}) => {
  return (
    <Styled.Container background={background} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

export default SectionBackground;
