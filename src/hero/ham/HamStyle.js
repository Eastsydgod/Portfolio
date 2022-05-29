import styled from "styled-components";
export const HamStyle = styled.div`
  .container {
    display: block;
    cursor: pointer;
    position: fixed;
    right: 0;
    margin: 15px;

    .bar1,
    .bar2,
    .bar3 {
      width: 25px;
      height: 3px;
      background-color: #333;
      margin: 4px 0;
      transition: 0.4s;
    }
  }
`;
