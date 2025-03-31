'use client';
import { useState } from 'react';
import Header from '../components/Header';
import AdminViewToggle from '../components/AdminViewToggle';
import IngredientSelector from '../components/IngredientSelector';
import MenuGrid from '../components/MenuGrid';
import './globals.css';

interface MenuItemType {
  type: string;
  image: string;
  ingredients: string[];
}

const allIngredients: string[] = [
  'Massa', 'Carne moída', 'Cebola', 'Temperos',
  'Mussarela', 'Presunto', 'Orégano', 'Tomate',
  'Frango desfiado', 'Catupiry',
  'Queijo', 'Brócolis', 'Bacon',
];

const menuData: MenuItemType[] = [
  {
    type: 'Carne',
    image: '\PastelGeral.jpg',
    ingredients: ['Massa','Carne moída', 'Cebola', 'Temperos']
  },
  {
    type: 'Pizza',
    image: '\PastelGeral.jpg',
    ingredients: ['Massa','Mussarela', 'Presunto', 'Orégano', 'Tomate']
  },
  {
    type: 'Frango com Catupiry',
    image: '\PastelGeral.jpg',
    ingredients: ['Massa','Frango desfiado', 'Catupiry']
  },
  {
    type: 'Carne com Queijo',
    image: 'PastelCarneQueijo.png',
    ingredients: ['Massa','Carne moída', 'Queijo']
  },
  {
    type: 'Brócolis com Bacon',
    image: '\PastelGeral.jpg',
    ingredients: ['Massa','Brócolis', 'Bacon']
  },
  {
    type: 'Bauru',
    image: '\PastelGeral.jpg',
    ingredients: ['Massa','Presunto', 'Mussarela', 'Tomate']
  },
  {
    type: 'Queijo',
    image: '\Pastel-Geral.jpg',
    ingredients: ['Massa','Queijo']
  }
];

export default function HomePage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [unavailableIngredients, setUnavailableIngredients] = useState<string[]>([]);

  const toggleIngredient = (ingredient: string) => {
    setUnavailableIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((ing) => ing !== ingredient)
        : [...prev, ingredient]
    );
  };

  return (
    <main>
      <Header />
      <AdminViewToggle isAdmin={isAdmin} toggleAdmin={() => setIsAdmin(!isAdmin)} />
      {isAdmin && (
        <IngredientSelector
          allIngredients={allIngredients}
          unavailable={unavailableIngredients}
          toggleIngredient={toggleIngredient}
        />
      )}
      <MenuGrid
        menuData={menuData}
        unavailableIngredients={unavailableIngredients}
        isAdmin={isAdmin}
      />
    </main>
  );
}