import { Container, Header, Link, AuthMenu } from './Navigation.styled';
import { UserMenu } from './UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectorsAuth';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <Container>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          {isLoggedIn && <Link to="/contacts">Contacts</Link>}
        </nav>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <AuthMenu>
            <Link to="/registration">Registration</Link>
            <Link to="/login">Login</Link>
          </AuthMenu>
        )}
      </Container>
    </Header>
  );
};
