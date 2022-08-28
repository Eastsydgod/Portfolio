import styled from "styled-components";
export const Main = styled.div`
  padding: 50px 100px;
  background-color: #e8e8e8;
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
  }
`;
