import styled from "styled-components";
export const Main = styled.div`
  background-color: #10101a;
  color: #8892b0;
  padding: 60px;
  .container {
    width: 60%;
    @media (max-width: 800px) {
      width: 95%;
    }
    p {
      letter-spacing: 1px;
      @media (max-width: 400px) {
        font-size: 13px;
      }
    }
    button {
      background-color: rgb(55, 150, 131);
      border: none;
      border-radius: 8px;
      width: 200px;
      height: 40px;
      cursor: pointer;
      @media (max-width: 600px) {
        margin-top: 20px;
      }
    }
  }
`;
