import styled from 'styled-components';

interface ISelectProps {
  width?: string | number
  height?: string | number
  outline?: string
  margin?: string | number
}

export const SelectContainer = styled.div`
  width: ${ (prop: ISelectProps) => prop.width || "100%" };
  height: ${ (prop: ISelectProps) => prop.height || "max-content" };

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Field = styled.select`
  width: ${ (prop: ISelectProps) => prop.width || "100%" };
  height: ${ (prop: ISelectProps) => prop.height || "max-content" };
  background: none;
  box-shadow: 0 1px 1px 1px rgba(0,0,0,0.1);
  border: none;
  padding: 15px;
  outline: ${ (prop: ISelectProps) => prop.outline || "none" };
  margin: ${ (prop: ISelectProps) => prop.margin || "0px"};
  margin-left: 0;

  option { 
  width: ${ (prop: ISelectProps) => prop.width || "100%" };
  height: ${ (prop: ISelectProps) => prop.height || "max-content" };
  }

`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 16px;
  color: gray;
  margin: ${ (prop: ISelectProps) => prop.margin || "0px" };
`