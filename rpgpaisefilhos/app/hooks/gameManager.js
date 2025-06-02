"use client"
import { useState } from "react";

export default function gameManager() {
  const initialHero = { life: 100, name: "Pai Desesperado", type: "hero" };
  const initialVillain = { life: 100, name: "Bebê Indomável", type: "villain" };

  const [hero, setHero] = useState(initialHero);
  const [villain, setVillain] = useState(initialVillain);
  const [heroTurn, setHeroTurn] = useState(true);
  const [history, setHistory] = useState([]);
  const [defenseActive, setDefenseActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [battleImage, setBattleImage] = useState(null);

  const addHistory = (text) => {
    setHistory(prev => [text, ...prev]);
  };

  const modifyLife = (target, amount) => {
    if (gameOver) return;
  
    const setter = target === "hero" ? setHero : setVillain;
    setter(prev => {
      const newLife = Math.max(0, prev.life + amount);
      if (newLife === 0) {
        setGameOver(true);
        if (target === "villain") {
          addHistory("Papai venceu! O bebê se rendeu.");
          setBattleImage("vitoria.jpg");
        } else {
          addHistory("O bebê venceu! O papai desabou.");
          setBattleImage("derrota.jpg");
        }
      }
      return { ...prev, life: newLife };
    });
  };
  
  const playSoundWithLock = (file, callback) => {
    const audio = new Audio(`/sounds/${file}`);
    setHeroTurn(false);
    audio.play();
    audio.onended = () => {
      setBattleImage(null);
      callback?.();
    };
  };

  const actions = {
    attack: () => {
      const damage = Math.floor(Math.random() * 21) + 10;
      const babyDodged = Math.random() < 0.3;
      setBattleImage("fralda.jpg");

      if (babyDodged) {
        addHistory("Bebê se esquivou da troca de fralda! Nenhum dano.");
        playSoundWithLock("ChoroBravo.mp3", () => {
          if (villain.life > 0) babyTurn();
        });
        return;
      }

      modifyLife("villain", -damage);
      addHistory(`Papai tentou trocar a fralda! -${damage} de vida no bebê.`);
      playSoundWithLock("PaiNaMerda.mp3", () => {
        if (villain.life > 0) babyTurn();
      });
    },

    defense: () => {
      setDefenseActive(true);
      setBattleImage("escudo.png");
      addHistory("Papai se preparou pra desviar da gorfada!");
      playSoundWithLock("PaiSuperCansado.mp3", () => {
        if (villain.life > 0) babyTurn();
      });
    },

    usePotion: () => {
      modifyLife("hero", +30);
      setBattleImage("Cafeee.jpg");
      addHistory("Papai tomou um café! +30 de vida.");
      playSoundWithLock("Cafeee.mp3", () => {
        if (villain.life > 0) babyTurn();
      });
    },

    flee: () => {
      addHistory("Papai fugiu pro banheiro. O bebê venceu!");
      setBattleImage("fuga.webp");
      playSoundWithLock("PaiNaMerda.mp3", () => setGameOver(true));
    }
  };

  const handleHeroAction = (action) => {
    if (!heroTurn || gameOver) return;
    actions[action]?.();
  };

  const babyTurn = () => {
    if (gameOver) return;

    setTimeout(() => {
      if (gameOver) return;
      const babyAttacks = [
        {
          text: "Bebê chorou muito! -10 de vida.",
          damage: -10,
          sound: "Choro1.mp3",
          image: "choro.png"
        },
        {
          text: "Explosão de Fralda! -15 de vida.",
          damage: -15,
          sound: "PaiNaMerda.mp3",
          explosive: true,
          image: "deuMerda.jpg"
        },
        {
          text: "Choro bravo! -8 de vida.",
          damage: -8,
          sound: "ChoroBravo.mp3",
          image: "choro.png"
        },
        {
          text: "Choro triplo! -20 de vida!",
          damage: -20,
          sound: "Choro3.mp3",
          image: "choro.png"
        }
      ];

      const attack = babyAttacks[Math.floor(Math.random() * babyAttacks.length)];
      setBattleImage(attack.image);

      if (attack.explosive && Math.random() < 0.3) {
        addHistory("Papai desviou da Gorfada! Nenhum dano.");
        playSoundWithLock("PaiSuperCansado.mp3", () => setHeroTurn(true));
        setBattleImage("escudo.png");
        return;
      }

      const effectiveDamage = defenseActive ? attack.damage / 2 : attack.damage;
      modifyLife("hero", effectiveDamage);
      addHistory(attack.text);

      playSoundWithLock(attack.sound, () => {
        setDefenseActive(false);
        setHeroTurn(true);
      });
    }, 1000);
  };

  const resetGame = () => {
    setHero(initialHero);
    setVillain(initialVillain);
    setHeroTurn(true);
    setHistory([]);
    setDefenseActive(false);
    setGameOver(false);
    setBattleImage(null);
  };

  return {
    hero,
    villain,
    handleHeroAction,
    heroTurn,
    history,
    resetGame,
    gameOver,
    battleImage
  };
}
