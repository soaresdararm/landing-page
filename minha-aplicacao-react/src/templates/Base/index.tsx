import React, { ReactNode } from "react";
import { NavLinkProps } from "react-router-dom";
import { GoTop } from "../../components/GoTop";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import * as Styled from "./styles";

interface BaseProps {
  children: ReactNode;
  footerHtml: string;
  links?: NavLinkProps[];
  logoData: any;
}

const Base: React.FC<BaseProps> = ({
  links,
  logoData,
  footerHtml,
  children,
}) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
};

export default Base;
