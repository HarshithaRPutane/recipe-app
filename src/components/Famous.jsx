import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Famous() {
  const [famous, setFamous] = useState([]);

  useEffect(() => {
    getFamous();
  }, []);

  const getFamous = async () => {
    const check = localStorage.getItem("famous");
    if (check) {
      setFamous(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );

      const data = await api.json();

      localStorage.setItem("famous", JSON.stringify(data.recipes));
      setFamous(data.recipes);
    }
  };

  return (
    <div>
      <Wrap>
        <h2>Famous Recipes</h2>
        <Splide
          options={{
            perPage: 4,
            pagination: false,
            drag: "free",
            gap: "3rem",
          }}
        >
          {famous.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Board>
                  <Link to={"recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Grad />
                  </Link>
                </Board>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrap>
    </div>
  );
}

const Wrap = styled.div`
  margin: 4rem 0rem;
`;

const Board = styled.div`
  min-height: 25rem;
  overflow: hidden;
  border-radius: 2rem;
  position: relative;
  display: flex;
  height: 50%;
  width: 100%;
  img {
    border-radius: 2rem;
    left: 0;
    width: 100%;
    position: absolute;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    height: 40%;
    display: flex;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
  }
`;

const Grad = styled.div`
  z-index: 3;
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Famous;
