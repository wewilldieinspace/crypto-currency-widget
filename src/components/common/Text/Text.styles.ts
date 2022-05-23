import styled from "styled-components";

export const Element = styled.p<{
  size: string;
  color: string;
}>`
  font-size: ${({ size }) => size};
  color: ${({ color, theme }) => {
    switch (color) {
      case "red":
        return theme.colors.red;
      default:
        return color;
    }
  }};
  font-weight: 400;
  line-height: 22px;
  word-wrap: break-word;
`;
