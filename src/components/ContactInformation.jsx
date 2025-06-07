import React from 'react'
import styled from 'styled-components';
import LocationPinIcon from './LocationPinIcon'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    padding: 20px;
    margin-top: 2rem;
    margin-bottom: 2rem; 
    `
    
    const StyledHeader = styled.h2`
    font-size: 30px;
    font-weight: ${props => props.isBold ? '800' : '600'};
    color: ${props => props.color || 'black'};
    `

    const Title = styled.h1`
    font-size: 40px;
    font-weight: ${props => props.isBold ? '800' : '600'};
    color: ${props => props.color || 'black'};
    `
    
    
    const StyledTitleContainer = styled.div`
    display: flex;
    gap: 15rem;
    flex-direction: row;
    `
const ContactInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;

`
const StyledText = styled.p`
    font-size: 20px;
    line-height: 1.5;
    font-weight: 600;
    color: ${props => props.color || '#333'}; ;
    `

const StyledTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    `

const ContactInformation = () => {
  return (
    <StyledContainer>
            <Title>Get In Contact </Title>
            <hr style={{ border: '1px solid #ccc', width: '100%', margin: '10px 0' }} />

        <StyledTitleContainer>
            <StyledHeader>Kiki's Veterinary Clinic</StyledHeader>
            <StyledHeader isBold={true} color='#2f44d1'>1+ 613-111-1111</StyledHeader>
        </StyledTitleContainer>
            <hr style={{ border: '1px solid #ccc', width: '100%', margin: '10px 0' }} />
        <ContactInfoContainer>
            <StyledTextContainer>
                <StyledText> 2000 SITE Avenue, Ottawa, ON </StyledText> 
                <LocationPinIcon width="24" height="24" />
            </StyledTextContainer>
            <StyledTextContainer>
                <StyledText color='#2f44d1' > Opening Hours: </StyledText>
                <StyledText> Mon-Fri: 9:00 AM - 5:00 PM </StyledText>
            </StyledTextContainer>
            

        </ContactInfoContainer> 

      
    </StyledContainer>
  )
}

export default ContactInformation
