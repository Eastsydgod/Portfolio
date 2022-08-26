import styled from 'styled-components'
export const Style = styled.div`
  background-color: #047aed;
  color: #fff;

  nav {
    height: 60px;
    display: flex;
    justify-content: space-between;
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
      display: flex;
      justify-content: space-evenly;
      a {
        color: #fff;
        text-decoration: none;
      }
      @media (max-width: 650px) {
        display: none;
      }
    }
    .Ham {
      display: none;
      @media (max-width: 650px) {
        display: block;
      }
    }
  }
  .TemporaryDrawer {
    display: flex;
    background-color: #fff;
    align-items: center;
    color: #000;
    justify-content: space-evenly;
    a {
      text-decoration: none;
      color: #000;
    }
  }
`
