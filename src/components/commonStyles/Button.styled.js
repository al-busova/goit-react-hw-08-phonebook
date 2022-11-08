import styled from '@emotion/styled';

export const Button = styled.button`
padding: ${props => props.theme.space[3]}px ${props => props.theme.space[4]}px;
font-size: ${props => props.theme.fontSizes.m}px;
color:${props => props.theme.colors.orange} ;
background-color: ${props => props.theme.colors.darkgreen} ;
border: ${props => `1px solid ${props.theme.colors.darkgreen}`};
border-radius: 4px;
:hover, :active {
    cursor: pointer;
    color: ${props => props.theme.colors.darkgreen} ;
    background-color: ${props => props.theme.colors.orange} ;
}
`;
