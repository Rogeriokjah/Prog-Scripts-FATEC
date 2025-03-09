import Board from "../components/Board";
import GlobalStyles from "../styles/GlobalStyles";

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <div className="container">
        <h1>Tabuleiro de Damas</h1>
        <Board />
      </div>
    </>
  );
}