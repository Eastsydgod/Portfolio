import styled from "styled-components";

export const Main = styled.div`
  padding: 100px 0px;
  background-color: #0a192f;
  
  color: #8892b0;
  @media (max-width: 650px) {
    padding: 20px;
  }
  .text {
    margin: 0 auto;
    width: 80%;
    .name {
      font-weight: bolder;
      @media (max-width: 650px) {
        position: relative;
        top: 60px;
      }
    }
    h1 {
      font-size: 46px;
      font-weight: 800;
      background: #000;
      -webkit-text-fill-color: transparent;
      margin: 0;
      font-size: 60px;
      animation: colors 10s linear infinite;
      @keyframes colors {
        0% {
          background: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
          -webkit-background-clip: text;
        }

        25% {
          background: linear-gradient(
            225deg,
            #ff3cac 0%,
            #784ba0 50%,
            #2b86c5 100%
          );
          -webkit-background-clip: text;
        }
        50% {
          background: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
          -webkit-background-clip: text;
        }

        75% {
          background: linear-gradient(to right, #e96443, #904e95);
          -webkit-background-clip: text;
        }
        100% {
          background: linear-gradient(
            109.6deg,
            rgba(61, 245, 167, 1) 11.2%,
            rgba(9, 111, 224, 1) 91.1%
          );
          -webkit-background-clip: text;
        }
      }
      @media (max-width: 650px) {
        font-size: 40px;
        margin: 50px 0;
      }
    }
  }
  .icons {
    text-align: center;
    margin-top: 30px;
    a {
      margin: 0 5px;
      transform: translateZ(0);
      transition: all 0.25s ease-out;
      color: #ccd6f6;
      :hover {
        transform: scale(1.05);
      }
    }
  }
  .bottom-text {
    width: 500px;
    @media (max-width: 650px) {
      width: 90%;
      font-size: 13px;
    }
  }
`;
