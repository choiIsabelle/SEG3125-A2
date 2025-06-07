import React from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
max-width: 800px;
    padding: 20px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  margin-top: 2rem;
margin-bottom: 4rem;
  `
const TextContainer = styled.div`
  flex: 1;
  align-content: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const StyledP = styled.p`
  font-size: 16px;
  align-self: center;
  line-height: 1.5;
  font-weight: 600;
  color: #333;
`;

const StyledHeader = styled.h2`
  font-size: 40px;
  align-self: center;
  font-weight: 600;
  color: #222;
  margin-bottom: 10px;
`;

export const AboutUsSection = () => {
  return (
    <StyledContainer>
        <TextContainer>
            <StyledHeader>About</StyledHeader>
            <StyledP>Website designed by Isabelle Choi (300282805) and Michelle Choi (300316843). </StyledP>
            {/* <StyledP>We are a team of dedicated healthcare professionals committed to providing the best care for our patients. Our mission is to ensure that every patient receives personalized attention and high-quality medical services.</StyledP>
            <StyledP>We believe in a patient-centered approach, where your health and well-being are our top priorities. Our team is here to support you every step of the way, from initial consultation to ongoing care.</StyledP> */}

        </TextContainer>


    </StyledContainer>
  )
}
