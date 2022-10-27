import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  color: #019ffd;
`;

export const Content = styled.div`
  overflowy: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 95%;
  bottom: 70px;
  height: 20px;
  font-size: 2.5rem;
  z-index: 1;
  cursor: pointer;
  color: #019ffd;
  @media screen and (max-width: 1600px) {
    left: 98%;
    font-size: 2rem;
    bottom: 50px;
  }
  @media screen and (max-width: 1400px) {
    left: 97%;
    font-size: 2rem;
    bottom: 50px;
  }
  @media screen and (max-width: 1050px) {
    left: 97%;
    font-size: 1.8rem;
    bottom: 40px;
  }
  @media screen and (max-width: 700px) {
    left: 96%;
    font-size: 1.7rem;
    bottom: 40px;
  }

  @media screen and (max-width: 550px) {
    left: 94%;
    font-size: 1.7rem;
    bottom: 30px;
  }
`;
