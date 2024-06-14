'use client'

import { useState, useEffect } from 'react';
import Link from '@/node_modules/next/link';
import recipesData from '../../recipes.json';

const Page = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
       const res = await fetch('../../recipes.json');
       const data = await res.json();
       setRecipes(data);
     };

     fetchData();

    setRecipes(recipesData);
  }, []);

  return (
    <div className='cointainer mx-auto px-4'>
      <h1 className='text-3x1 font-bold my-8'>Lista de Receitas</h1>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {recipes.map(recipe => (
          <li key={recipe.id} className='bg-white shadow-md rounded-lg overflow-hidden'>
            <Link href={`/recipes/${recipe.id}`} >
                <img src={recipe.image} alt={recipe.name} className="w-full h-32 md:h-48 object-cover"/>
                <div className="p-4">
                  <p className="text-xl font-semibold mb-2">{recipe.name}</p>
                </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
