// Style your components here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans';
  min-height: 100vh;
`
export const GeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  padding: 30px;
`
export const Heading = styled.h1`
  color: #35469c;
  font-size: 27px;
  font-weight: bold;

  margin-bottom: 16px;
`

export const FormContainer = styled.div`
  display: flex;

  justify-content: space-between;
`
export const BgImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  height: 300px;
  padding: 10px;
  width: 48%;
`
export const Text = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
  font-weight: 500;
`

export const MemeForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Label = styled.label`
  color: #7e858e;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  margin-bottom: 0px;
`

export const Input = styled.input`
  color: #5a7184;
  background-color: #ffffff;
  height: 37px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  outline: none;
`

export const Select = styled.select`
  color: #1e293b;
  background-color: #ffffff;
  height: 37px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
`
export const Option = styled.option`
  font-size: 14px;
  padding-top: 10px;
`

export const GenerateBtn = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-size: 10px;
  border-radius: 5px;
  border-width: 0px;
  padding: 10px;
  cursor: pointer;
  outline: none;
`
