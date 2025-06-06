import styled from "styled-components"

const StyledInfosContainer = styled.div`
    display: flex; 
    justify-content: space-between;
    padding-right: 3rem;
    align-items: center;
    `
const StyledContactContainer = styled.div`
    flex-direction: column;
    align-items: center;
    `
const StyledButton = styled.button`
  background-color: #2f44d1;
  color: white;
  border: none;
  border-radius: 999px; 
  padding: 10px 20px;
  font-weight: 600;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    color:rgba(207, 214, 255, 0.77);
    background-color: #1d2bb6; /* optional for hover effect */
  }
`

export const InfoNav = () => {
    return (
        <StyledInfosContainer className='info-nav'>
            <img src='/KVC_logo.png' alt='KVC Logo' style={{ width: '35%', height: '35%', marginLeft: '20px' }} />
            <StyledContactContainer className="contact-container">
                <h2>Contact Us</h2>
                <h2>613-XXX-XXX</h2>
            </StyledContactContainer>
            <StyledContactContainer className="contact-container">
                <StyledButton>Book An Appointment</StyledButton>
            </StyledContactContainer>
        </StyledInfosContainer>
    )
}
