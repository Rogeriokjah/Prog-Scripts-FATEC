export default function Character({ data, isHero, onAction, isHeroTurn }) {
    const lifePercent = Math.max(0, data.life) + '%';

    return (
        <div className="character">
            <div className="life-bar">
                <div className="life-fill" style={{ width: lifePercent }}></div>
                <div className="life-text">{data.life} HP</div>
            </div>

            <div className="sprite">👤</div>
            <h2>{data.name}</h2>

            {isHero && onAction && (
                <div className="actions">
                    <button disabled={!isHeroTurn} onClick={() => onAction("attack")}>Trocar Fralda</button>
                    <button disabled={!isHeroTurn} onClick={() => onAction("defense")}>Desviar da Golfada</button>
                    <button disabled={!isHeroTurn} onClick={() => onAction("usePotion")}>Tomar Café</button>
                    <button disabled={!isHeroTurn} onClick={() => onAction("flee")}>Fugir pro Banheiro</button>
                </div>
            )}
        </div>
    );
}
