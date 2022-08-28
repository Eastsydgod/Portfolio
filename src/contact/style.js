import styled from "styled-components";
export const Main = styled.div`
  padding: 20px;
  background-color: #fff;
  @media (max-width: 800px) {
    padding: 0px;
    margin: 0px;
  }
  .home {
    width: 120px;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: dodgerblue;
  }
  .container {
    width: 85%;
    margin: auto;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    justify-content: space-around;
    @media (max-width: 800px) {
      flex-direction: column;
      /* justify-content: center; */
      width: 100%;
      margin: 0px;
    }
    .left {
      padding: 34px;
      width: 40%;
      @media (max-width: 800px) {
        width: 100%;
      }
      p {
        margin-bottom: 50px;
      }
      div {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        .icons {
          margin-right: 20px;
          cursor: pointer;
        }
      }
    }
    .right {
      padding: 34px;
      width: 55%;
      position: relative;
      left: 15px;
      @media (max-width: 800px) {
        width: 100%;
        left: 0px;
      }
      .flex-span {
        width: 100%;
        display: flex;
        span{
          width: 49%;
        }
      }
    
      input {
      background-color: #f0f0f0;
        height: 30px;
        margin: 20px 0px;
        width: 95%;
        outline: none;
        border: none;
        font-size: 16px;
      }
      .review--area {
        height: 70px;
        width: 95%;
        outline: none;
      }
      .btn {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        button {
          background-color: dodgerblue;
          color: #fff;
          border: none;
          width: 200px;
          height: 40px;
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }
  }
`;
