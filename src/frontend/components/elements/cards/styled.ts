import styled from 'styled-components';

interface ICardProps {
  bg?: string
  color?: string
  width?: string | number
  height?: string | number
  hover?: string
}

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${ (props: ICardProps) => props.width || "100%" };
  height: ${ (props: ICardProps) => props.height || "80px"};
  background: ${ (props: ICardProps) => props.bg || "#4ECCA3" };
  color: ${ (props: ICardProps) => props.color || "#fff"};
  transition: all 0.7s;
  :hover {
    cursor: pointer;
    background: ${ (props: ICardProps) => props.hover || "#59B99A" }
  }
`;
