import styled from "styled-components";

const PieceStyled = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ isWhite }) => (isWhite ? "#fff" : "#000")};
  border: 3px solid ${({ isWhite }) => (isWhite ? "#ccc" : "#444")};
`;

export default function Piece({ isWhite }) {
  return <PieceStyled isWhite={isWhite} />;
}