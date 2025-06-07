import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    text-align: center;
    padding: 1rem;
    background-color: #2f44d1;
`;

const StyledText = styled.p`
    font-size: 1.2rem;
    color: white;
    `

const Footer = () => {
    return (
        <FooterContainer>
            <StyledText>&copy; {new Date().getFullYear()} Isabelle Choi, Michelle Choi. </StyledText>
        </FooterContainer>
    );
};

export default Footer;