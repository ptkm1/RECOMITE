import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;

  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  
  ::-webkit-scrollbar {
    display: none;
  }
`;