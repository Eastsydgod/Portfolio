import styled from "styled-components";
export const Style = styled.div`
  div {
    display: flex;
    justify-content: center;

    nav {
      background-color: #2a2b3880;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5.3px);
      -webkit-backdrop-filter: blur(5.3px);
      height: 60px;
      margin-top: 30px;
      border-radius: 12px;
      position: fixed;
      transition: top 0.6s;
      display: flex;
      flex-direction: row-reverse;
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
          color: #64ffda;
          text-decoration: none;
          div {
            height: 100%;
            width: 100px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;

            :hover {
              border-bottom: 1px solid #64ffda;
            }
          }
        }
      }
    }
  }
`;
