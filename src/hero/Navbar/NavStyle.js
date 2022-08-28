import styled from 'styled-components'
export const Style = styled.div`
/* color: #000; */
background: rgba(255, 255, 255, 0);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.3px);
-webkit-backdrop-filter: blur(5.3px);
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
      height: 50px;
      display: flex;
      justify-content: space-evenly;
   
      a {
        height: 100%;
        color: #000;
        text-decoration: none;
        div{
        height: 100%;
        width: 100px;
        cursor: pointer;
        display: flex;
        justify-content: center;

        :hover{
          border-bottom: 1px solid #000;
        }
      }
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
    height: 60px;
    width: 80%;
    margin: 0 auto;
    border-radius: 10px;
    align-items: center;
    color: #000;
    justify-content: space-evenly;
    a {
      text-decoration: none;
      color: #000;
    }
  }
`
