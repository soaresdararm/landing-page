import React from "react";
import * as Styled from "./styles";

interface MenuLinkProps {
  children: React.ReactNode;
  link: string;
  newTab?: boolean;
}

const MenuLink: React.FC<MenuLinkProps> = ({
  children,
  link,
  newTab = false,
}) => {
  const target = newTab ? "_blank" : "_self";
  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};

export default MenuLink;
