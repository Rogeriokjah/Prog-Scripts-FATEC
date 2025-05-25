'use client'
import Character from "@/app/components/Character";
import gameManager from "@/app/hooks/gameManager";
import styles from "@/app/page.module.css";

export default function Home() {
    const { hero, villain, handleHeroAction, heroTurn, history, resetGame, gameOver } = gameManager();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>RPG: Pais vs Bebês</h1>

            <div className={styles.characters}>
                <Character data={hero} isHero onAction={handleHeroAction} isHeroTurn={heroTurn} />
                <Character data={villain} isHero={false} />
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
