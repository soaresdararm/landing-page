import React, { ReactNode } from "react";
import * as Styled from "./styled";

interface SectionContainerProps {
  children: ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default SectionContainer;
