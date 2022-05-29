import styled from "styled-components";
export const Main = styled.div`
  background-color: dodgerblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 60px 100px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  .texts {
    width: 60%;
    @media (max-width: 800px) {
      width: 300px;
    }
  }
  .icons {
    display: flex;
    /* @media (max-width: 800px) {

    } */
    div {
      border: 1px solid #fff;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 10px;
      height: 30px;
      width: 50px;
      :hover {
        background-color: #fff;
        color: #000;
      }
    }
  }
`;
