import styled from '@emotion/styled';

export const Form = styled.form`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: ${props => props.theme.space[3]}px;
width: 600px;
margin: 0 auto;
padding: ${props => props.theme.space[4]}px;
button {
    margin-top: ${props => props.theme.space[3]}px;
}
`;
