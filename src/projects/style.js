import styled from "styled-components";
export const Style = styled.div`
  padding: 60px;
  background-color: whitesmoke;


  .cards {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    .card {
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
      height: 400px;
      width: 300px;
      padding: 12px;
      margin: 30px;
      border-radius: 10px;
      transform: translateZ(0);
      transition: all 0.25s ease-out;
      :hover{
        transform: scale(1.05);
      }
      @media (max-width: 650px) {
      height: 350px;
        
      }
      .img-Container {
        img {
          width: 100%;
        }
        div {
          background-color: #fff;
          position: relative;
          bottom: 20px;
          height: 30px;
          width: fit-content;
          margin: 0 auto;
          padding: 5px;
          border-radius: 7px;
        }
      }
      .icon{
        color: slategray;
        cursor: pointer;
        margin:0px 6px;
        :hover{
            color: #000;
        }
      }
    }
  }
`;
