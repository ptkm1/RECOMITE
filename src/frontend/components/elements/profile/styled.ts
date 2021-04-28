import styled from 'styled-components'

export const TopProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  right: 5%;
  top: 5%;
  button {
    border: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 10px;
    border-radius: 100%;
    transition: all 0.7s;
    cursor: pointer;
  }

  button:hover {
    background: #F1F7FF;
    border: none;
  }
`

export const TopProfileCircle = styled.img`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  box-shadow: 0px 0px 1px gray;
  object-fit: cover;
  margin: 0px 5px;
`

export const TopProfileName = styled.span`
  font-size: 17px;
  color: gray;
  font-weight: bold;
`