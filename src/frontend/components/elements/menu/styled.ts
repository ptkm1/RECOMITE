import styled from 'styled-components'

export const MenuLeftContainer = styled.div`
    background-color: #fff;
    box-shadow: 0 1px 1px 1px rgba(0,0,0,0.1);
    height: 100vh;
    padding: 2rem 0.25rem;
    width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-right: 55px;
    margin-left: 3px;
`

export const MenuLeftLogo = styled.img`
  width: 2.6rem;
  margin-top: 6vh;
`

export const MenuLeftOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10vh;
`
export const MenuLeftOption = styled.a`
  text-decoration: none;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  transition: all 0.7s;

  :hover {
    background: #F1F7FF;
  }
`