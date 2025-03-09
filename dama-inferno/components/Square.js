import styled from "styled-components";

const SquareStyled = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isDark }) => (isDark ? "#764c24" : "#f5d6b4")};
  &:hover {
    background-color: ${({ isDark }) => (isDark ? "#5a3a1b" : "#e2c3a1")};
  }
`;

export default function Square({ isDark, children }) {
  return <SquareStyled isDark={isDark}>{children}</SquareStyled>;
}