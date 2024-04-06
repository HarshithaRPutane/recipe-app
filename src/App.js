import { BrowserRouter, Link } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import ListPages from "./pages/ListPages";

function App() {
  return (
    <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Food Recipes</Logo>
      </Nav>
      <Search />
      <Category />
      <ListPages />
    </BrowserRouter>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  margin: 0px 0px 0px 10px;
`;
const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
