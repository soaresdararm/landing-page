import React from "react";
import * as Styled from "./styled";
import MenuLink from "../MenuLink";

interface NavLinksProps {
  links?: any[];
}

const NavLinks: React.FC<NavLinksProps> = ({ links = [] }) => {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.Container>
  );
};

export default NavLinks;
