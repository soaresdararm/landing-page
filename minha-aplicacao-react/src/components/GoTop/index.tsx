import { KeyboardArrowUp } from "@styled-icons/material-outlined/KeyboardArrowUp";
import * as Styled from "./styled";

export const GoTop = () => {
  return (
    <Styled.Container href="#" aria-label="Go to top" title="Go to top">
      <KeyboardArrowUp />
    </Styled.Container>
  );
};
