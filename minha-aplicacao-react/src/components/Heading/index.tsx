import React from "react";
import * as Styled from "./styles";

interface HeadingProps {
  children?: React.ReactNode;
  colorDark?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "small" | "medium" | "big" | "huge";
  uppercase?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  children = "",
  colorDark = true,
  as = "h1",
  size = "huge",
  uppercase = false,
}) => {
  return (
    <Styled.Title
      colorDark={colorDark}
      as={as}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  );
};

export default Heading;
