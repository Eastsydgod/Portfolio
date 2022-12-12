import styled from "styled-components";
export const Main = styled.div`
  display: flex;
  background: #e8e8e8;
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

  .Img {
    width: 100%;

    .img {
      margin: 0 auto;
      width: 60%;
      height: 90%;
      display: flex;
      align-items: center;

      img {
        width: 100%;
        height: 90%;
      }
    }
  }
`;
