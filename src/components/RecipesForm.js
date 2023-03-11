import { useState } from "react";
import { format } from "date-fns";
import { useRecipesContext } from "../contexts/RecipesContextProvider";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Recipes from "../components/Recipes";

import "../App.css";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  background-color: #f0997d;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  label {
    color: #a75d5d;
    font-weight: bold;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #f2f2f2;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #f2f2f2;
  resize:none;
`;

const Button = styled.button`
  padding: 1rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #a75d5d;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #a7544d;
    font-weight: bold;
  }
`;

function RecipesForm() {
  const { addRecipes } = useRecipesContext();
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipes = {
      title,
      ingredients,
      instructions,
      date: format(date, "MM/dd/yyyy"),
    };
    addRecipes(newRecipes);
    setTitle("");
    setIngredients("");
    setInstructions("");
    setDate(new Date());
    navigate("/notes");
  };

  function refreshPage(){
    window.location.reload(false)
  }

  return (
    <>
      <h1>Recipes</h1>
      <div className="App">
        <Form onSubmit={handleSubmit}>
          <label>
            Recipe Title:
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Ingredients:
            <Textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            ></Textarea>
          </label>
          <label>
            Instructions:
            <Textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            ></Textarea>
          </label>
          <label>
            Date:
            <Input
              type="date"
              value={format(date, "yyyy-MM-dd")}
              onChange={(event) => setDate(new Date(event.target.value))}
            />
          </label>
          <Button type="submit">Add Recipe</Button>
        
        </Form>
        <Button onClick={refreshPage}>Find another recipe...</Button>
      </div>
      <Recipes />
    </>
  );
}

export default RecipesForm;
