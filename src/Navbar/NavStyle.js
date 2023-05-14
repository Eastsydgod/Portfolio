import styled from "styled-components";
export const Style = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  .logo {
    @media (max-width: 600px) {
      display: none;
    }
  }
  .navContainer {
    display: flex;
    justify-content: center;

    nav {
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5.3px);
      -webkit-backdrop-filter: blur(5.3px);
      height: 60px;
      margin-top: 30px;
      border-radius: 12px;
      position: fixed;
      transition: top 0.6s;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      @media (max-width: 600px) {
        display: none;
      }

      .navItem {
        height: 50px;
        display: flex;
        justify-content: space-evenly;
        a {
          height: 100%;
          border-radius: 4px;
          /* color: #64ffda; */
          /* color: #fff; */
          font-weight: bolder;
          margin: 0px 2px;
          text-decoration: none;
          width: 100px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          :hover {
            /* border-bottom: 2px solid #64ffda; */
          }
        }
      }
    }
  }
  .drkToggle {
    height: fit-content;
    border-radius: 4px;
    padding: 7px;
    :hover {
      background-color: #2a2b3880;
      cursor: pointer;
    }

    @media (max-width: 600px) {
      display: none;
    }
  }
  .lghtToggle {
    height: fit-content;
    border-radius: 4px;
    padding: 7px;
    :hover {
      background-color: #eeeeee;
      cursor: pointer;
    }

    @media (max-width: 600px) {
      display: none;
    }
  }
`;
