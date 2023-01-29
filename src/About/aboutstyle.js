import styled from "styled-components";
export const Main = styled.div`
  display: flex;
  background-color: #0a192f;
  color: #8892b0;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .Texts-container {
    display: flex;
    gap: 25px;
    height: 400px;
    flex-direction: column;

    .texts {
      width: 80%;
      margin: auto;
      h1 {
        @media (max-width: 400px) {
          font-size: 23px;
        }
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
  }

  .img {
    width: 60%;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      max-width: 300px;
      border-radius: 6px;
    }
  }
`;
