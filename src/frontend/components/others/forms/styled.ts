import styled from 'styled-components';

interface IFormProps {
  width?: string | number
  height?: string | number
  margin?: string | number
  padding?: string | number
  display?: string
  grids?: string | number
}

export const FormContainer = styled.form`
  display: ${ (prop: IFormProps) => prop.display || 'grid' };
  grid-template-columns: ${ (prop: IFormProps) => prop.grids || '1fr 1fr' };
  align-items: flex-start;

  width: ${ (prop: IFormProps) => prop.width || "100%" };
  height: ${ (prop: IFormProps) => prop.height || "90vh" };
  margin: ${ (prop: IFormProps) => prop.margin || "0px" };
  padding: ${ (prop: IFormProps) => prop.padding || "15px" };
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const FormSeparatorColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 40%;
  margin-top: 15px;

  h1 {
    font-size: 1.2em;
    color: #98A4B0;
  }
  span {
    font-size: 0.7em;
    color: gray;
    font-style: italic;
  }
`

export const FormSeparatorRow = styled.div`
  display: flex;
  flex-direction: row;
  width: ${ (prop: IFormProps) => prop.width || "100%" };
  justify-content: space-between;
  margin: ${ (prop: IFormProps) => prop.margin || "0px" };
  padding: ${ (prop: IFormProps) => prop.padding || "0px" };

  h1 {
    font-size: 1.2em;
    color: #98A4B0;
  }
`