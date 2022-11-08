import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${props => props.theme.space[4]}px;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.space[4]}px;
  > nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Header = styled.header`
  font-weight: 500;
  padding: ${props => props.theme.space[3]}px 0;
  margin-bottom: ${props => props.theme.space[4]}px;
  border-bottom: ${props => props.theme.space[1] / 2}px solid
    ${props => props.theme.colors.darkgreen};
  button {
    font-size: ${props => props.theme.fontSizes.s}px;
    padding: ${props => props.theme.space[3]}px
      ${props => props.theme.space[4]}px;
  }
`;
export const AuthMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${props => props.theme.space[4]}px;
  padding: ${props => props.theme.space[3]}px 0;
  > nav {
    display: flex;
  }
`;
export const Link = styled(NavLink)`
  padding: ${props => props.theme.space[3]}px ${props => props.theme.space[4]}px;
  border-radius: ${props => props.theme.space[2]}px;
  text-decoration: none;
  color: ${props => props.theme.colors.darkgreen};
  font-size: ${props => props.theme.fontSizes.s}px;
  :hover,
  :focus {
    color: ${props => props.theme.colors.orange};
  }
  &.active {
    color: ${props => props.theme.colors.darkgreen};
    background-color: ${props => props.theme.colors.orange};
  }
`;
