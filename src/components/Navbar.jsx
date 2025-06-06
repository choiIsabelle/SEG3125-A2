import React from 'react';
import styled from 'styled-components';
import { InfoNav } from './InfoNav';
import { ChevronDownIcon  } from './ChevronDownIcon';

const Nav = styled.nav`
    background-color:#2f44d1;
    color: #fff;
    margin: 0;
    padding: 10px 20px;
`;

const NavList = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 30px; 
    justify-content: center; /* Center horizontally */
`;

const NavItem = styled.li`
    margin: 0 15px;
`;

const NavLink = styled.a`   
    font-size: 25px;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
`;

const NavLinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const NavBarContainer = styled.div``;

export const Navbar = ({ handlePageChange }) => {
    return (
        <NavBarContainer>
            <InfoNav />
            <Nav>
                <NavList>
                    <NavItem>
                        <NavLinkContainer>
                            <NavLink onClick={() => handlePageChange('home')}>
                                About Us
                            </NavLink>
                            <ChevronDownIcon width='20' height='20' />
                        </NavLinkContainer>
                    </NavItem>
                    <NavItem>
                        <NavLinkContainer>
                            <NavLink onClick={() => handlePageChange('services')}>
                                Services
                            </NavLink>
                            <ChevronDownIcon width='20' height='20' />
                        </NavLinkContainer>
                    </NavItem>
                    <NavItem>
                        <NavLinkContainer>
                            <NavLink onClick={() => handlePageChange('patientPortal')}>
                                Patient Portal
                            </NavLink>
                            <ChevronDownIcon width='20' height='20' />
                        </NavLinkContainer>
                    </NavItem>
                    <NavItem>
                        <NavLinkContainer>
                            <NavLink>
                                Contact Us
                            </NavLink>
                            <ChevronDownIcon width='20' height='20' />
                        </NavLinkContainer>
                    </NavItem>
                </NavList>
            </Nav>
        </NavBarContainer>
    );
};