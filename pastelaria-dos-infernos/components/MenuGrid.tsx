import MenuItem from './MenuItem';

interface MenuGridProps {
  menuData: {
    type: string;
    image: string;
    ingredients: string[];
  }[];
  unavailableIngredients: string[];
  isAdmin: boolean;
}

export default function MenuGrid({ menuData, unavailableIngredients, isAdmin }: MenuGridProps) {
  return (
    <div className="menu-grid">
      {menuData.map((item, index) => (
        <MenuItem
          key={index}
          {...item}
          unavailableIngredients={unavailableIngredients}
          isAdmin={isAdmin}
        />
      ))}
    </div>
  );
}