import { useContext, useState, useEffect} from "react";
import RecipesContext from "../contexts/RecipesContext";


export function useRecipesContext() {
  return useContext(RecipesContext);
}

 export function RecipesContextProvider({ children }) {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(storedRecipes);
  }, []);

  const addRecipes = (newRecipe) => {
    const id = Date.now().toString();
    const updatedRecipes = [...recipes, { ...newRecipe, id }];
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    setRecipes(updatedRecipes);
  };

  const clearRecipes = () => {
    localStorage.clear();
    setRecipes([]);
  };
  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((note) => note.id !== id));
  };
  const contextValue = {
    recipes,
    addRecipes,
    clearRecipes,
    deleteRecipe,
  };

  return (
    <RecipesContext.Provider value={contextValue}>
      {children}
    </RecipesContext.Provider>
  );
}

