import styled from "styled-components";
export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
  }
  .Texts {
    display: flex;
    height: 400px;
    flex-direction: column;
    /* background-color: #1c3fa8; */
    .texts {
      width: 80%;
      margin: auto;
    }
  }

  .Img {
    width: 100%;

    .img {
      margin: 0 auto;
      width: 60%;
      height: 100%;
      display: flex;
      align-items: center;

      img {
        width: 100%;
        height: 90%;
      }
    }
  }
`;
