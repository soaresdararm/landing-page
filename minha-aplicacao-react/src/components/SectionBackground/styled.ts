import styled, { css } from 'styled-components';

interface Theme {
  colors: {
    primaryColor: string;
    white: string;
  };
}

const containerBackgroundActivate = (theme: Theme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

interface ContainerProps {
  theme: Theme;
  background?: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${background && containerBackgroundActivate(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
