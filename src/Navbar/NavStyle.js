import styled from "styled-components";
export const Style = styled.div`
  nav {
    background: rgba(255, 255, 255, 0);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.3px);
    -webkit-backdrop-filter: blur(5.3px);
    height: 60px;
    width: 100%;
    position: fixed;
    transition: top 0.6s;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 20px;
    div {
      display: flex;
      align-items: center;
      h2 {
        margin-right: 15px;
      }
    }
    .navItem {
      width: 50%;
      height: 50px;
      display: flex;
      justify-content: space-evenly;

      a {
        height: 100%;
        color: #000;
        text-decoration: none;
        div {
          height: 100%;
          width: 100px;
          cursor: pointer;
          display: flex;
          justify-content: center;

          :hover {
            border-bottom: 1px solid #000;
          }
        }
      }

      @media (max-width: 650px) {
        display: none;
      }
    }
    .Ham {
      /* display: none; */
      visibility: hidden;
      @media (max-width: 650px) {
        /* display: block; */
        visibility: visible;
      }
    }
  }
  .TemporaryDrawer {
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    a {
      text-decoration: none;
      color: #000;
      margin-bottom: 18px;
      border-bottom: #e8e8e8 1px solid;

      .contact {
        border: #e8e8e8 1px solid;
        height: 30px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
