import styled from 'styled-components';

interface ITextAreaProps {
  width?: string | number
  height?: string | number
  outline?: string
  resize?: string
}

export const TextAreaContainer = styled.div`
  width: ${ (prop: ITextAreaProps) => prop.width || "100%" };
  height: ${ (prop: ITextAreaProps) => prop.height || "max-content" };

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Field = styled.textarea`
  width: ${ (prop: ITextAreaProps) => prop.width || "100%" };
  height: ${ (prop: ITextAreaProps) => prop.height || "max-content" };
  background: none;
  box-shadow: 0 1px 1px 1px rgba(0,0,0,0.1);
  border: none;
  padding: 15px;
  outline: ${ (prop: ITextAreaProps) => prop.outline || "none" };
  margin: 15px;
  margin-left: 0;
  resize: ${ (prop: ITextAreaProps) => prop.resize || "none"};
`

export const Label = styled.label`
  font-weight: bold;
  font-size: 16px;
  color: gray;
`