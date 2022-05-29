import styled from "styled-components";
export const Main = styled.div`
  text-align: center;
  padding: 10px 20px;
  height: 360px;
  background-color: #e8e8e8;
  button {
    background-color: dodgerblue;
    color: #fff;
    border: none;
    margin-top: 10px;
    border-radius: 8px;
    height: 40px;
    width: 150px;
    cursor: pointer;
  }

  .boxes {
    height: 200px;
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    font-size: 15px;
    @media (max-width: 800px) {
      margin-top: 0px;
    }
    div {
      background-color: #fff;
      margin-top: 52px;
      height: 130px;
      width: 150px;
      color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
      transition: transform 0.5s ease-in;
      @media (max-width: 800px) {
        font-size: 11px;
        width: 90px;
        height: 90px;
      }
      :hover {
        transform: translateY(-15px);
      }
      .icons {
        font-size: 220%;
      }
    }
  }
`;
