import styled from "styled-components";

export const FooterStyle = styled.div`
  margin: 0;

  .Content {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 30px 40px;
    background-color: rgb(0, 32, 32);
    color: #fff;
    @media (max-width: 700px) {
      flex-wrap: wrap;
      justify-content: start;
      padding-left: 30px;
    }
    .first {
      width: 400px;
      span {
        display: flex;
        align-items: center;
      }
    }

    div {
      width: 200px;
      display: flex;
      flex-direction: column;

      a {
        text-decoration: none;
        color: #fff;
        margin-bottom: 12px;
      }
    }
  }
  .copy {
    background-color: rgb(53, 48, 45);
    height: 50px;
    color: #fff;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-weight: lighter;
  }
`;
