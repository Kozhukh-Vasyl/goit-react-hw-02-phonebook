import styled from 'styled-components';
export const Ul = styled.ul`
  list-style: none;
  display: inline-grid;
`;
export const Button = styled.button`
  width: auto;
  height: auto;
  padding: 7px 9px;
  background-color: #fff;
  font-size: 16px;
  font-weight: 400;
  border-radius: 2px;
  border: 1px solid #acacac;
  box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.2);
  outline: none;
  transition: 0.25s ease;
  cursor: pointer;
  &:hover {
    background-color: #cad9b2;
    color: #ffffff;
  }
`;
export const Li = styled.li`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  padding: 7px 9px;
  background-color: #fdfffa;
  font-size: 16px;
  font-weight: 600;
  border-radius: 2px;
  border: 1px solid #acacac;
  box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.2);
  outline: none;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  div {
    margin-right: 15px;
  }
`;
