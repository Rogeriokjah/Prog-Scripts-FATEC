import styled from "styled-components";

const PieceStyled = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ isWhite }) => (isWhite ? "#ffcc00" : "#8b0000")};
  border: 3px solid ${({ isWhite }) => (isWhite ? "#ffaa00" : "#5a0000")};
  box-shadow: 0 0 10px ${({ isWhite }) => (isWhite ? "#ffdd55" : "#660000")};
`;

export default function Piece({ isWhite }) {
  return <PieceStyled isWhite={isWhite} />;
}