import styled from "styled-components";

export const Main = styled.div`
  padding: 50px 0px;
  position: relative;
  @media (max-width: 650px) {
    padding: 70px 6px;
  }
  .cont {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 900px) {
      flex-direction: column-reverse;
    }
    .lottie {
      width: 450px;
      display: flex;
      justify-content: center;
      @media (max-width: 900px) {
        width: 70%;
      }
      @media (max-width: 500px) {
        width: 90%;
      }
    }
    .text {
      width: 50%;
      @media (max-width: 900px) {
        width: 90%;
      }
      .tag {
        width: fit-content;
        padding: 6px;
        border-radius: 4px;

        font-weight: lighter;
        letter-spacing: 1px;
        font-size: 10px;

        @media (max-width: 650px) {
          padding: 2px;
          position: relative;
          top: 60px;
          margin-bottom: 70px;
        }
      }
      .header {
        font-weight: 800;
        font-size: 45px;
        .animatedText {
          font-weight: 800;
          background: #000;
          -webkit-text-fill-color: transparent;
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
        }
        @media (max-width: 650px) {
          font-size: 40px;
        }
      }
    }
    .bottom-text {
      width: 500px;
      @media (max-width: 650px) {
        margin-top: 30px;
        width: 90%;
        font-size: 13px;
      }
    }
  }

  .icons {
    display: flex;
    text-align: center;
    margin-top: 30px;
    position: absolute;
    bottom: 0;
    right: 50%;

    @media (max-width: 400px) {
      margin-left: 4px;
      flex-direction: row;
      bottom: 0;
      left: 3%;
    }
    a {
      margin: 0 5px;
      transform: translateZ(0);
      transition: all 0.25s ease-out;
      /* color: #ccd6f6; */
      :hover {
        transform: scale(1.05);
      }
    }
  }
`;
