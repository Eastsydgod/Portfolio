import styled from "styled-components";
export const Main = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 60px;
  @media (max-width: 900px) {
    height: 100%;
    margin: 50px 0px;
    padding: 20px;
    justify-content: unset;
    flex-direction: column;
  }
  .lottie {
    width: 45%;
    @media (max-width: 900px) {
      width: 90%;
    }
  }
  .container {
    width: 50%;
    @media (max-width: 900px) {
      width: 95%;
    }
    p {
      letter-spacing: 1px;
      @media (max-width: 400px) {
        font-size: 13px;
      }
    }
    button {
      background-color: #fa7d00;
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
