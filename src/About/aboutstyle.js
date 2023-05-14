import styled from "styled-components";
export const Main = styled.div`
  background-color: #10101a;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #8892b0;
  padding: 60px;
  @media (max-width: 900px) {
    padding: 20px;
    justify-content: unset;
    flex-direction: column;
  }
  .lottie {
    width: 45%;
    @media (max-width: 900px) {
      width: 90%;
    }
    @media (max-width: 500px) {
      width: 350px;
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
