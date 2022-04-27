import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  display: flex;
  aling-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 2rem;
`;

export const Button = styled.button`
  width: 100px;
  height: 100px;
  border: none;
  outline: none;
  background: #0d1117;
  cursor: pointer;

  
`;

export const Ico = styled.img`
  width: 32px;
  height: 32px;
`;

export const Show = styled.div`
  width: 0;
  height: 100px;
  transition: all .3s;
  background: green;

  
`;

