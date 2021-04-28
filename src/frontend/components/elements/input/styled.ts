import styled from 'styled-components';

interface IInputProps {
  width?: string | number
  height?: string | number
  outline?: string
}

export const InputContainer = styled.div`
  width: ${ (prop: IInputProps) => prop.width || "100%" };
  height: ${ (prop: IInputProps) => prop.height || "max-content" };

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Field = styled.input`
  width: ${ (prop: IInputProps) => prop.width || "100%" };
  height: ${ (prop: IInputProps) => prop.height || "max-content" };
  background: none;
  box-shadow: 0 1px 1px 1px rgba(0,0,0,0.1);
  border: none;
  padding: 15px;
  outline: ${ (prop: IInputProps) => prop.outline || "none" };
  margin: 15px;
  margin-left: 0;
`

export const Label = styled.label`
  font-weight: bold;
  font-size: 16px;
  color: gray;
`