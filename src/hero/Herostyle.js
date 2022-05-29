import styled from "styled-components";
export const Main = styled.div`
  height: 500px;
  background-color: #047aed;
  text-align: center;
  color: #fff;

  nav {
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    div {
      display: flex;
      align-items: center;
      h2 {
        margin-right: 15px;
      }
    }
    .NavLink {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 400px;
      @media (max-width: 800px) {
          display: none; 
        }
      .drop-container { 
        .home-link {
          display: flex;
          align-items: center;
        }
        }
        .link{
           text-decoration:none ;
        }
      }

      li {
        color: #fff;
        list-style: none;
      }
    }
    .TemporaryDrawer {
      display: none;
      @media (max-width: 800px) {
        display: flex;
      }
    }
  }
  .text {
    margin: 0 auto;
    margin-top: 200px;
    width: 80%;
  }
`;
