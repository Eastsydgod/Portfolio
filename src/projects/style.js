import styled from "styled-components";
export const Style = styled.div`
  padding: 60px;
  background-color: #0a192f;

  color: #8892b0;
  @media (max-width: 400px) {
    padding: 20px;
  }

  .cards {
    width: 100%;
    .card {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 200px 0;
      @media (max-width: 800px) {
        flex-direction: column-reverse;
        margin: 50px 0;
      }
      .firstContainer {
        width: 46%;
        position: relative;
        left: 70px;
        z-index: 1;
        float: right;
        @media (max-width: 800px) {
          left: 0px;
          width: 90%;
        }
        .content {
          background-color: #112240;
          border-radius: 5px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
            rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
          padding: 15px;
        }
        .tech {
          margin: 15px 0;
          word-spacing: 10px;
          letter-spacing: 2px;
          font-size: x-small;
        }
        .icon {
          cursor: pointer;
          :hover {
            color: #ccd6f6;
          }
        }
      }
      .secondContainer {
        margin: 0px;
        width: 40%;
        height: fit-content;
        display: flex;
        justify-content: center;
        position: relative;
        right: 70px;
        @media (max-width: 850px) {
          width: 50%;
        }
        @media (max-width: 800px) {
          width: 90%;
          top: 88px;
          right: 0;
        }

        img {
          width: 100%;
          filter: grayscale(60%);
          cursor: pointer;
          @media (max-width: 800px) {
            width: 50%;
            float: right;
            filter: grayscale(0%);
          }
          :hover {
            filter: grayscale(0%);
          }
        }
      }
    }
    .cardInverse {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row-reverse;
      margin: 200px 0;
      @media (max-width: 800px) {
        flex-direction: column-reverse;
        margin: 50px 0;
      }
      .firstContainer {
        width: 46%;
        position: relative;
        right: 70px;
        z-index: 1;
        text-align: right;
        @media (max-width: 800px) {
          right: 0px;
          width: 90%;
        }
        .content {
          background-color: #112240;
          text-align: center;
          border-radius: 5px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
            rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
          padding: 15px;
        }
        .tech {
          margin: 15px 0;
          word-spacing: 10px;
          letter-spacing: 2px;
          font-size: x-small;
        }
        .icon {
          cursor: pointer;
          :hover {
            color: #ccd6f6;
          }
        }
      }
      .secondContainer {
        margin: 0px;
        width: 40%;
        height: fit-content;
        display: flex;
        justify-content: center;
        position: relative;
        left: 70px;
        @media (max-width: 850px) {
          width: 50%;
        }
        @media (max-width: 800px) {
          width: 90%;
          top: 90px;
          left: 0;
        }

        img {
          width: 100%;
          filter: grayscale(60%);
          cursor: pointer;
          @media (max-width: 800px) {
            width: 50%;
            float: left;
            filter: grayscale(0%);
          }
          :hover {
            filter: grayscale(0%);
          }
        }
      }
    }
  }
  .onGoing {
    background-color: #000;
    padding: 10px;
    height: fit-content;
    /* display: none; */
  }
`;
