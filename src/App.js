import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecipesContextProvider } from "./contexts/RecipesContextProvider";
import RecipesForm from "./components/RecipesForm";

import CookBook from "./components/CookBook";
import styled from "styled-components";
import "./App.css";

const Cont = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 6rem;
  }
`;

function App() {
  return (
    <Cont>
      <RecipesContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<RecipesForm />} />
            <Route path="/notes" element={<CookBook />} />
          </Routes>
        </Router>
     
      </RecipesContextProvider>
    </Cont>
  );
}

export default App;
