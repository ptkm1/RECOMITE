import styled from 'styled-components';

interface IModalProps {
  width?: string | number
  height?: string | number
  top?: string | number
  left?: string | number
  bottom?: string | number
  right?: string | number
  bg?: string
  color?: string
  position?: string
  borderRadius?: string | number
  hoverBg?: string
}

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 15;
  background-color: #ddd;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  top: ${ (prop: IModalProps) => prop.top || "0px" };
  left: ${ (prop: IModalProps) => prop.left || "0px" };
  right: ${ (prop: IModalProps) => prop.right || "0px" };
  bottom: ${ (prop: IModalProps) => prop.bottom || "0px" };

  h1 {
    position: fixed;
    top: 100px;
    left: 150px;
  }
`;

export const ButtonCloseModal = styled.button`
  width: ${ (prop: IModalProps) => prop.width || "50px" };
  height: ${ (prop: IModalProps) => prop.height || "50px" };
  background: ${ (prop: IModalProps) => prop.bg || "#4ECCA3" };
  color: ${ (prop: IModalProps) => prop.color || "#fff"};
  border: none;
  position: ${ (prop: IModalProps) => prop.position || "relative" };
  top: ${ (prop: IModalProps) => prop.top || "0px" };
  left: ${ (prop: IModalProps) => prop.left || "0px" };
  right: ${ (prop: IModalProps) => prop.right || "0px" };
  bottom: ${ (prop: IModalProps) => prop.bottom || "0px" };
  border-radius: ${ (prop: IModalProps) => prop.borderRadius || "0px" };
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background: ${ (prop: IModalProps) => prop.hoverBg ||"#59B99A" };
  }
`