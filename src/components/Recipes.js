import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../App.css";

const H4 = styled.div`
  text-align: left;
  font-size: 1.5rem;
`;
const Unit = styled.div`
width: 80vw;
margin: 3rem;

}

`;
const Rec = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Single = styled.div`
  background-color: #d3756b;
  padding: 5rem;
  margin-top: 5rem;
  border-radius: 9px;
  &:nth-child(even) {
    background-color: #f0997d;
    color: #a75d5d;
  }
  box-shadow: 2px 2px 20px black;
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  
  useEffect(() => {
    const newRecipes = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "3dbc527ed9msh7f8e4e06afe15a0p124cb2jsn79052db837f2",
          "X-RapidAPI-Host": "random-recipes.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(
          `https://random-recipes.p.rapidapi.com/ai-quotes/1`,
          options
        );
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error(error);
      }
    };
    newRecipes();

  }, []);

  

  return (
    <>
   
      <Rec>
   
        {recipes && recipes.length > 0 ? (
          <Unit>
            {recipes.map((data) => (
              <Single key={data.id}>
                <h2>{data.title}</h2>
                <Head>
                  <img src={data.image} alt="dish" />

                  <ul>
                    <h3>ingredients</h3>
                    {data.ingredients.map((ingredient, index) => (
                      <li style={{ fontSize: "1.5rem" }} key={index}>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </Head>

                <h3 style={{textAlign:"left"}}>preparation</h3>
                {data.instructions.map((instruction, index) => (
                  <H4 key={index}>{instruction.text}</H4>
                ))}
              </Single>
            ))}
          </Unit>
        ) : (
          <p>Loading recipes...</p>
        )}
      </Rec>
    </>
  );
}
export default Recipes;
