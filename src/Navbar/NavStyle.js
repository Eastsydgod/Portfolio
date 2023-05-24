import styled from "styled-components";
export const Style = styled.div`
  display: flex;
  justify-content: space-between;

  .logo {
    @media (max-width: 600px) {
      display: none;
    }
  }

  nav {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.3px);
    backdrop-filter: blur(5.3px);
    -webkit-backdrop-filter: blur(5.3px);
    height: 80px;
    width: 100%;
    padding: 2px 50px;
    position: fixed;
    transition: top 0.6s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      margin: 0px 12px;
      border: none;
      cursor: pointer;
      width: fit-content;
      height: 40px;
      padding: 0px 20px;
      border-radius: 4px;
      font-weight: lighter;
      letter-spacing: 1px;
      font-size: 10px;
      :hover {
        font-weight: bold;
      }
    }
    @media (max-width: 600px) {
      padding: 2px 20px;

      display: none;
    }

    .navItem {
      height: 50px;
      display: flex;
      justify-content: space-evenly;
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
  .mobileNav {
    display: none;
    background: transparent;
    height: fit-content;
    box-shadow: none;
    @media (max-width: 600px) {
      display: block;
    }
    .hamNav {
      div {
        display: flex;
        align-items: center;
        .toggle {
          margin-top: 10px;
          margin-right: 7px;
        }
      }
    }
  }
  .dropDownContainer {
    height: 150px;

    width: 100%;
    div {
      margin-top: 100px;
      display: flex;
      justify-content: center;
      button {
        margin: 0px 8px;
        border: none;
        cursor: pointer;
        width: fit-content;
        height: 40px;
        padding: 0px 20px;
        border-radius: 4px;
        font-weight: lighter;
        letter-spacing: 1px;
        font-size: 10px;
      }
    }
  }
`;
