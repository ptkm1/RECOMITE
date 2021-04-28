import styled from 'styled-components';

interface IButtonProps {
  bg?: string
  hover?: string
  width?: string | number
  height?: string | number
  margin?: string | number
}

export const ButtonContainer = styled.button`
  color: white;
  background-color: ${ (prop: IButtonProps) => prop.bg || "#4ECCA3" };
  width: ${ (prop: IButtonProps) => prop.width || "200px" };
  height: ${ (prop: IButtonProps) => prop.height || "60px"};
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.4s;
  margin: ${ (prop: IButtonProps) => prop.margin || "1px" };

  :hover {
    background-color: ${ (prop: IButtonProps) => prop.hover || "#59B99A" } ;
  }
`;
