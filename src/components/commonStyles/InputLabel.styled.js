import styled from '@emotion/styled';
export const Input = styled.input`
width: 180px;
padding: ${props => props.theme.space[2]}px ;
font-size: ${props => props.theme.fontSizes.m}px;
border: ${props => `1px solid ${props.theme.colors.darkgreen}`};
border-radius: 4px;
:hover, :focus {
    cursor: pointer;
    border-color: ${props => props.theme.colors.orange};
}
`;
export const Label = styled.label`
color: ${props => props.theme.colors.darkgreen} ;
font-size: ${props => props.theme.fontSizes.l}px;
font-weight: 600;
margin-right: ${props => props.theme.space[2]}px ;
`;