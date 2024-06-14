import recipesData from '../../../recipes.json';

export const dynamicParams = true;

export async function generateStaticParams() {
  return recipesData.map(recipe => ({
    params: {
      id: recipe.id
    }
  }));
}

async function getRecipeById(id) {
  return recipesData.find(recipe => recipe.id === id);
}

export default async function RecipePage({ params }) {
  const { id } = params;
  const recipe = await getRecipeById(id);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={recipe.image} alt={recipe.name} className="w-full h-auto rounded-lg" />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Ingredientes:</h2>
          <ul className="list-disc pl-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-2">{ingredient}</li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mt-6 mb-2">Instruções:</h2>
          <ol className="list-decimal pl-4">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="mb-2">{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
