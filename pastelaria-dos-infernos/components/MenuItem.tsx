import { useState } from 'react';

interface MenuItemProps {
  type: string;
  image: string;
  ingredients: string[];
  unavailableIngredients: string[];
  isAdmin: boolean;
}

export default function MenuItem({
  type,
  image,
  ingredients,
  unavailableIngredients,
  isAdmin,
}: MenuItemProps) {
  const isUnavailable = ingredients.some((ing) => unavailableIngredients.includes(ing));
  const [showIngredients, setShowIngredients] = useState(false);

  return (
    <div
      className={`menu-item ${isUnavailable ? 'unavailable' : ''}`}
      onClick={() => setShowIngredients(!showIngredients)}
    >
      <h3 style={{ textDecoration: isUnavailable ? 'line-through' : 'none' }}>{type}</h3>
      <img src={image} alt={`Era pra ter uma imagem de Pastel de ${type} aqui... Se não tem, o erro é de propósito (confia)` } />
      {showIngredients && (
        <ul>
          {ingredients.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>
      )}
      <p>R$: 10,00</p>
    </div>
  );
}
