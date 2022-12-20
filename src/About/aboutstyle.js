import styled from "styled-components";
export const Main = styled.div`
  display: flex;
  /* background: #e8e8e8; */
  background-color: #0a192f;
  color: #8892b0;
  justify-content: space-between;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
  }
  .Texts {
    display: flex;
    height: 400px;
    flex-direction: column;
    .texts {
      width: 80%;
      margin: auto;
      p {
        letter-spacing: 1px;
      }
      button {
        background-color: rgb(55, 150, 131);
        border: none;
        border-radius: 8px;
        width: 200px;
        height: 40px;
        cursor: pointer;
      }
    }
  }

  .img {
    width: 60%;
    padding: 0 20px;

    img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      border-radius: 12px;
    }
  }
`;
