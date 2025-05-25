'use client'
import Character from "@/app/components/Character";
import gameManager from "@/app/hooks/gameManager";
import styles from "@/app/page.module.css";

export default function Home() {
    const { hero, villain, handleHeroAction, heroTurn, history, resetGame, gameOver,battleImage  } = gameManager();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>RPG: Pais vs Bebês</h1>
            {battleImage && (
              <div className={styles.battleImage}>
                <img src={`/images/${battleImage}`} alt="ação" />
              </div>
            )}

            <div className={styles.battlefield}>
                <div className={styles.villainPosition}>
                    <Character data={villain} isHero={false} />
                </div>
                <div className={styles.heroPosition}>
                    <Character data={hero} isHero onAction={handleHeroAction} isHeroTurn={heroTurn} />
                </div>
                {gameOver && (
                  <div className={styles.battleImage}>
                    <img src={`/images/gameOver.png`} alt="fim" />
                  </div>
                )}
            </div>
            <div className={styles.history}>
                <h2>Histórico:</h2>
                <ul>
                    {history.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            {gameOver && (
                <div className={styles.gameOver}>
                    <h2>Fim de jogo!</h2>
                    <button onClick={resetGame}>Reiniciar Jogo</button>
                </div>
            )}
        </div>
    );
}
