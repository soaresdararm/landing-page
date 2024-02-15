import React, { useEffect, useState } from "react";
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { NavLinkProps } from "react-router-dom";
import LogoLink from "../LogoLink";
import NavLinks from "../NavLinks";
import * as Styled from "./styled";

interface MenuProps {
  links?: NavLinkProps[];
  logoData: any;
}

const Menu: React.FC<MenuProps> = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState<boolean>(true);
  const [buttonHidden, setButtonHidden] = useState<boolean>(true);

  useEffect(() => {
    const windowLoadFn = () => {
      const { innerWidth } = window;

      if (innerWidth <= 768) {
        setButtonHidden(false);
        setVisible(false);
      } else {
        setButtonHidden(true);
      }
    };

    window.addEventListener("load", windowLoadFn);

    return () => window.removeEventListener("load", windowLoadFn);
  }, []);

  useEffect(() => {
    const windowResizeFn = (e: Event) => {
      const { innerWidth } = e.target as Window;

      if (innerWidth <= 768 && visible) {
        setVisible(false);
      }

      if (innerWidth > 768 && !visible) {
        setVisible(true);
      }
    };

    window.addEventListener("resize", windowResizeFn);

    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => window.removeEventListener("resize", windowResizeFn);
  }, [visible]);

  return (
    <>
      <Styled.Button
        onClick={() => setVisible(true)}
        aria-label="Open/Close Menu"
        visible={visible}
        aria-hidden={buttonHidden}
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container visible={visible} aria-hidden={!visible}>
        <Styled.MenuContainer onClick={() => setVisible(false)}>
          <LogoLink {...logoData} />
          <NavLinks links={links} />
        </Styled.MenuContainer>
      </Styled.Container>
    </>
  );
};

export default Menu;
