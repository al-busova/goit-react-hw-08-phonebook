import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.space[4]}px;
`;

export const MainTitle = styled.h1`
margin-bottom: ${p => p.theme.space[4]}px;
text-align: center;
font-size: ${props => props.theme.fontSizes.xxl}px;
color: ${props => props.theme.colors.darkgreen};
`;

export const AppealText = styled.p`
text-align: center;
font-weight: 700;
font-size: ${props => props.theme.fontSizes.l}px;
color: ${props => props.theme.colors.darkgreen};
`;
