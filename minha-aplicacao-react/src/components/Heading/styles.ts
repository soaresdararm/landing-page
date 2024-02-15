import styled, { css, DefaultTheme } from "styled-components";

type TitleSize = "small" | "medium" | "big" | "huge";

interface TitleProps {
  theme: DefaultTheme;
  colorDark?: boolean;
  size: TitleSize;
  uppercase?: boolean;
}

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font?.sizes?.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font?.sizes?.large};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.font?.sizes?.xlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font?.sizes?.xhuge};
  `,
};

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media?.lteMedium} {
    font-size: ${theme.font?.sizes?.xlarge};
  }
`;

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? "uppercase" : "none"};
`;

export const Title = styled.h1<TitleProps>`
  ${({ theme, colorDark, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleCase(uppercase)};
  `}
`;
