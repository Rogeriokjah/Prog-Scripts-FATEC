import styled from "styled-components";

const SquareStyled = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isDark }) => (isDark ? "#400000" : "#ff4500")};
  &:hover {
    background-color: ${({ isDark }) => (isDark ? "#600000" : "#ff6347")};
  }
`;

export default function Square({ isDark, children }) {
  return <SquareStyled isDark={isDark}>{children}</SquareStyled>;
}