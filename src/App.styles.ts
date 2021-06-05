import styled, { createGlobalStyle } from "styled-components";
import bgImage from "./images/background-img.jpg";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Catamaran', san-serif;
  }

  html {
    height: 100%
  }

  body {
    background-image: url(${bgImage});
    background-size: cover;
    display: flex;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #000;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: "Fascinate Inline", "Arial Narrow", Arial, sans-serif;
    background-image: linear-gradient(180deg, #eee, #000);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-background-clip: transparent;
    filter: drop-shadow(2px 2px #fff);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  .start-btn,
  .next-btn {
    cursor: pointer;
    background-image: linear-gradient(180deg, #eee, #d38558);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start-btn {
    max-width: 200px;
  }
`;
