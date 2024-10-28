import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 35px;
`

export const CardContainer = styled.div`
  background-color: #f5d50f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

export const InputElement = styled.div`
  display: flex;
  align-items: center;
`

export const InputField = styled.input`
  /* Corrected element name */
  color: #323f4b;
  height: 35px;
  border: 2px solid #cbd2d9;
  border-radius: 5px;
  outline: none;
  margin-right: 15px;
  padding-left: 10px;
`

export const ParagraphText = styled.p`
  margin-right: 20px;
  color: #323f4b;
  font-size: 18px;
  font-weight: normal;
`

export const ButtonElement = styled.button`
  outline: none;
  border: none;
  background-color: #d946ef;
  color: #ffffff;
  border-radius: 4px;
  padding: 15px;
  font-size: 10px;
`
