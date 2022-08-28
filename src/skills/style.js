import styled from "styled-components";
export const Main = styled.div`
background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  .texts {
    width: 60%;
    @media (max-width: 800px) {
      width: 80%;
    }
  }
  
  .icons {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 800px) {
      
    }
    .container{
      margin: 0 10px;
      text-align: center;
      .icon{
        width:80px;
        height: 80px;
        background-color: #87cefa;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          width :70%;
          
        }
      }
    }
    
  }
`;
