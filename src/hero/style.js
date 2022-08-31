import styled from "styled-components";

export const Main = styled.div`
  padding: 100px 50px;
  @media (max-width: 650px) {
    padding: 40px;
  }
  .text {
    margin: 0 auto;
    width: 80%;
    .name{
      font-weight:bolder;
    }
    h1 {
      font-size: 48px;
      font-weight: 800;
      background: #000;
      -webkit-text-fill-color: transparent;
      margin: 0;
      font-size: 60px;
      animation: colors 10s linear infinite;
      @keyframes colors {
        0% {
          background:linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);
          -webkit-background-clip: text;
        } 

        25% {
          background: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
          -webkit-background-clip: text;
        }
        50% {
            background: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
          -webkit-background-clip: text;
        }

        75% {
             background:  linear-gradient(to right, #e96443, #904e95);
          -webkit-background-clip: text;
        }
        100% {
            background: linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% );
          -webkit-background-clip: text;
        }
      }
      @media (max-width: 650px) {
        font-size: 44px;
      }
    }
    .bottom-text{
      text-align: center;
    }
  }
  .icons{
    text-align: center;
      a{
        margin: 12px;
      }
    }
`;
