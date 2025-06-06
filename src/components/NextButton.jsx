import styled from 'styled-components';

const StyledButton = styled.button`
background-color: #2f44d1;
color: white;
border: none;
border-radius: 999px;
padding: 12px 28px;
font-size: 26px;
font-weight: bold;
cursor: pointer;
transition: background-color 0.2s ease;
 &:hover {
    background-color: #1f34b5;
}
`

export const NextButton = ({content, handleOnClick}) => {
  return (
    <StyledButton onClick={handleOnClick}>{content}</StyledButton>
  )
}
