import styled from "styled-components";
export const Main = styled.div`
  background-color: #0a192f;
  color: #8892b0;
  padding: 60px;
  text-align: center;
  width: 100%;
  h1 {
    color: #64ffda;
    margin-bottom: 20px;
  }
  div {
    width: 600px;
    margin: 50px auto;
    @media (max-width: 700px) {
      width: 95%;
      /* display: none; */
    }
  }
  button {
    padding: 12px;
    width: 270px;
    height: 50px;
    color: #64ffda;
    background-color: transparent;
    border: 1px solid #64ffda;
    border-radius: 2px;
    cursor: pointer;
    :hover {
      background-color: rgb(100, 255, 218, 0.3);
    }
  }
`;
