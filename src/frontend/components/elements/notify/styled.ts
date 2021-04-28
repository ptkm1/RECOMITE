import styled from 'styled-components';

interface INotifyProps {
  top?: string | number
  left?: string | number
  bottom?: string | number
  right?: string | number
  bg?: string
  color?: string
}

export const NotifyContainer = styled.div`
  position: fixed;

  width: 350px;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;
  top: ${ (prop: INotifyProps) => prop.top };
  left: ${ (prop: INotifyProps) => prop.left };
  right: ${ (prop: INotifyProps) => prop.right };
  bottom: ${ (prop: INotifyProps) => prop.bottom };
  background: ${ (prop: INotifyProps) => prop.bg || "#4ECCA3" };
  color: ${ (prop: INotifyProps) => prop.color || "#fff"};

  animation: notifyAnimation 5s;
  @keyframes notifyAnimation {
    0%   {opacity: 0;}
    25% {opacity: 0.5;}
    50%  {opacity: 1;}
    75% {opacity:0.5;}
    100% {opacity: 0;}
  }
`;
