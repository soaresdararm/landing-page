import React from "react";
import SectionContainer from "../SectionContainer";
import TextComponent from "../TextComponent";
import * as Styled from "./styled";

interface FooterProps {
  footerHtml: string;
}

const Footer: React.FC<FooterProps> = ({ footerHtml }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{footerHtml}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

export default Footer;
