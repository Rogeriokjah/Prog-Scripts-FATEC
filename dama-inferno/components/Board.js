import styled from "styled-components";
import Square from "./Square";
import Piece from "./Piece";

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 50px);
  grid-template-rows: repeat(8, 50px);
  gap: 0;
  margin: 20px auto;
  width: fit-content;
  border: 5px solid #333;
`;

export default function Board() {
  const renderSquares = () => {
    const squares = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isDark = (row + col) % 2 === 1;
        const hasPiece = row < 3 || row > 4;
        const isWhite = row < 3;
        squares.push(
          <Square key={`${row}-${col}`} isDark={isDark}>
            {hasPiece && <Piece isWhite={isWhite} />}
          </Square>
        );
      }
    }
    return squares;
  };

  return <BoardContainer>{renderSquares()}</BoardContainer>;
}