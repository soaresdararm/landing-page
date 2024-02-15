import React from "react";
import * as Styled from "./styled";
import PropTypes from "prop-types";
import Heading from "../Heading";

interface LogoLinkProps {
  text: string;
  srcImg?: string;
  link: string;
}

const LogoLink: React.FC<LogoLinkProps> = ({ text, srcImg = "", link }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: PropTypes.string.isRequired,
  srcImg: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export default LogoLink;
