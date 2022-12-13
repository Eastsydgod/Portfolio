import styled from "styled-components";
export const Main = styled.div`
  background-color: #fff;
  padding: 60px;
 
  @media (max-width: 400px) {
    padding: 20px;
  }
 
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    width: 37%;
    @media (max-width: 800px) {
      width: 80%;
    }
    .icon {
      margin: 5px;
      border-radius: 5px;
      height: 40px;
      padding: 10px;
      display: flex;
      align-items: center;
    }
  }
`;
