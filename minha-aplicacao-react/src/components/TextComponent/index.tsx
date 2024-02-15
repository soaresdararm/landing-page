import React from "react";
import * as Styled from "./styles";

interface TextComponentProps {
  children: React.ReactNode;
}

const TextComponent: React.FC<TextComponentProps> = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default TextComponent;
