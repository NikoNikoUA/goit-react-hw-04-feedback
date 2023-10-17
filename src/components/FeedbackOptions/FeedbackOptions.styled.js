import styled from 'styled-components';

export const BtnItemsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const BtnItem = styled.li``;

export const Btn = styled.button`
  text-align: center;
  padding: 10px;
  font-size: 10px;
  min-width: 100px;
  min-height: 60px;
  border: none;
  border-radius: 4px;
  color: black;
  font-size: 25px;
  font-weight: bold;
  text-transform: capitalize;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  transition: transform background-color 250ms ease-in-out;

  &:hover {
    background-color: grey;
  }
`;
