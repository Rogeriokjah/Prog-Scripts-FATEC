interface IngredientSelectorProps {
    allIngredients: string[];
    unavailable: string[];
    toggleIngredient: (ingredient: string) => void;
  }
  
  export default function IngredientSelector({ allIngredients, unavailable, toggleIngredient }: IngredientSelectorProps) {
    return (
      <div className="ingredient-selector">
        <h4>Ingredientes indisponíveis:</h4>
        <div className="ingredient-list">
          {allIngredients.map((ing) => (
            <label key={ing} className="ingredient-checkbox">
              <input
                type="checkbox"
                checked={unavailable.includes(ing)}
                onChange={() => toggleIngredient(ing)}
              />
              {ing}
            </label>
          ))}
        </div>
      </div>
    );
  }
  