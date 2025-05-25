"use client"
import { useState } from "react";

export default function gameManager() {
    const initialHero = { life: 100, name: "Pai Desesperado" };
    const initialVillain = { life: 100, name: "Bebê Indomável" };

    const [hero, setHero] = useState(initialHero);
    const [villain, setVillain] = useState(initialVillain);
    const [heroTurn, setHeroTurn] = useState(true);
    const [history, setHistory] = useState([]);
    const [defenseActive, setDefenseActive] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    const addHistory = (text) => {
        setHistory(prev => [text, ...prev]);
    };

    const modifyLife = (target, amount) => {
        const setter = target === "hero" ? setHero : setVillain;
        setter(prev => {
            const newLife = Math.max(0, prev.life + amount);
            if (newLife === 0) setGameOver(true);
            return { ...prev, life: newLife };
        });
    };

    const actions = {
        attack: () => {
            modifyLife("villain", -10);
            addHistory("Herói tentou trocar a fralda! -10 de vida no bebê.");
        },
        defense: () => {
            setDefenseActive(true);
            addHistory("Herói desviou da golfada! Próximo ataque com dano reduzido.");
        },
        usePotion: () => {
            modifyLife("hero", +20);
            addHistory("Herói tomou um copo de café! +20 de vida.");
        },
        flee: () => {
            addHistory("Herói fugiu para o banheiro... Vitória do Bebê!");
            setGameOver(true);
        }
    };

    const handleHeroAction = (action) => {
        if (!heroTurn || gameOver) return;
        actions[action]?.();
        setHeroTurn(false);

        setTimeout(() => {
            if (gameOver) return;

            const babyAttacks = [
                { text: "Bebê chorou MUITO! -10 de vida.", damage: -10 },
                { text: "Explosão de Fralda! -15 de vida.", damage: -15 },
                { text: "Jogou brinquedo na testa! -8 de vida.", damage: -8 },
                { text: "Recusou dormir. -20 de vida!", damage: -20 },
            ];

            const attack = babyAttacks[Math.floor(Math.random() * babyAttacks.length)];
            const effectiveDamage = defenseActive ? attack.damage / 2 : attack.damage;

            modifyLife("hero", effectiveDamage);
            addHistory(attack.text);
            setDefenseActive(false);
            setHeroTurn(true);
        }, 1500);
    };

    const resetGame = () => {
        setHero(initialHero);
        setVillain(initialVillain);
        setHeroTurn(true);
        setHistory([]);
        setDefenseActive(false);
        setGameOver(false);
    };

    return { hero, villain, handleHeroAction, heroTurn, history, resetGame, gameOver };
}
