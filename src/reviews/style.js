import styled from "styled-components";
export const Main = styled.div`
  padding: 50px 100px;
  background-color: #0a192f;
  color: #8892b0;
  @media (max-width: 800px) {
    padding: 20px;
  }

  .container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 800px) {
      flex-direction: column;
    }
    img {
      width: 200px;
    }
    section {
      display: flex;
      justify-content: space-evenly;
      .first {
        width: 36%;
      }
      .second {
        width: 36%;
      }
    }
    @media (max-width: 400px) {
      section {
        flex-direction: column;
        width: 100%;
        .first,
        .second {
          width: 100%;
          div {
            width: 100%;
          }
        }
      }
    }
  }
`;
