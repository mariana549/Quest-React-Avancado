import { styled } from "styled-components";

export const Button = styled.button`
  position: fixed;
  bottom: 50px;
  right: 200px;
  z-index: 99;

  border-radius: 5px;
  background-color: transparent;
  animation: bounce 2s infinite;

  img {
    border-radius: 5px;
    width: 42px;
    height: 42px;
    padding: 0;
    margin: 0;
  }

  &:hover{
    cursor: pointer;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;
