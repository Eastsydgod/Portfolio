import styled from "styled-components";
export const Main = styled.div`
  padding: 60px;
  width: 100%;
  @media (max-width: 700px) {
    padding: 20px;
    margin-bottom: 100px;
  }
  .contactMe-Text {
    width: fit-content;
    padding: 6px;
    border-radius: 4px;

    font-weight: lighter;
    letter-spacing: 1px;
    font-size: 10px;
  }
  div {
    width: 600px;

    @media (max-width: 700px) {
      font-size: 12px;

      width: 95%;
    }
  }
  .drkBtn {
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
    @media (max-width: 700px) {
      width: 90%;
    }
  }
  .lghtBtn {
    padding: 12px;
    width: 270px;
    height: 50px;

    border: 1px solid #64ffda;
    border-radius: 2px;
    cursor: pointer;
    color: #fff;
    background-color: rgb(100, 255, 218);

    @media (max-width: 700px) {
      width: 90%;
    }
  }
`;
