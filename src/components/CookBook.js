import { useRecipesContext } from "../contexts/RecipesContextProvider";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "../App.css";

const Book = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f0997d;
  button{
    background-color: #ffc3a1;
    color:#a75d5d;
    border:none;
    cursor:pointer;
    border-radius: 3px;
  }
`;
const Cards = styled.div`
  width: 350px;
  height: 500px;
  background-color: #d3756b;
  box-shadow: 1px 1px 5px black;
  padding: 20px;
  margin: 30px;
  &::-webkit-scrollbar {
    display: none;
  }
  h2 {
    font-size: 1.5rem;
  }
  overflow: scroll;
  span.preparation {
    font-weight: bold;
  }
`;

const Button = styled.button`
  width: 70px;
  height: 40px;
  margin-right: 10px;
  background-color: #ffc3a1;
  color: #a75d5d;
  font-weight: bold;
  border-radius: 9px;
  border: none;
  cursor: pointer;
`;

const Buttons = styled.div`
  display: block;
  text-align: center;
  margin: 9px;
`;
function CookBook() {
  const { recipes, clearRecipes, deleteRecipe } = useRecipesContext();

  const handleDeleteRecipe = (id) => {
    deleteRecipe(id);
  };
  return (
    <>
      <h1>Cookbook</h1>
      <Book>
        {recipes && recipes.length > 0 &&recipes.map((recipe, index) => (
          <Cards key={index}>
            <h2>{recipe.title}</h2>
            <br />
            <p id="prep">{recipe.ingredients}</p>
            <p >{recipe.instructions}</p>
            <p>{recipe.date}</p>
            <button
              onClick={() => {
                handleDeleteRecipe(recipe.id);
              }}
            >
              Delete
            </button>
          </Cards>
        ))}
      </Book>
      <Buttons>
        <Button>
          <Link style={{ textDecoration: "none", color: "#A75D5D" }} to="/">
            Add Recipe
          </Link>
        </Button>
        <Button onClick={clearRecipes}>Clear Recipes</Button>
      </Buttons>
    </>
  );
}

export default CookBook;
