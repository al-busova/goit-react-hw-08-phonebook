import styled from '@emotion/styled';

export const ListContacts = styled.ul`
list-style: none;
padding: 0 ${props => props.theme.space[4]}px;
`;

export const ItemContacts = styled.li`
display: flex;
justify-content: space-between;
padding: ${props => props.theme.space[3]}px;
outline: ${props => `1px solid ${props.theme.colors.darkgreen}`};
button {
    font-size: ${props => props.theme.fontSizes.s}px;
    padding: ${props => props.theme.space[3]}px;
}
`;

export const WrapperContact = styled.div`
display: flex;
gap: ${props => props.theme.space[3]}px;
width: 100%;
font-size: ${props => props.theme.fontSizes.m}px;
`;

export const NameContact = styled.span`
width: 50%;
padding-left: ${props => props.theme.space[3]}px;
text-align: left;
`;