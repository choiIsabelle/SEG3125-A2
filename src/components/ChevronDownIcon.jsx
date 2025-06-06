import React from 'react'
import styled from 'styled-components' 

const StyledChevronDownIcon = styled.img`
    width: ${props => props.width || '24px'};
    height: ${props => props.height || '24px'};
    cursor: pointer;
`

export const ChevronDownIcon = ({width, height}) => {
  return (
    <StyledChevronDownIcon 
        src='/ChevronDown.png'
        alt='Chevron Down Icon'
        width={width || "24px"}
        height={height || "24px"}
        />
  )
}
