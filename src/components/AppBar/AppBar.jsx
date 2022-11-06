
import { Container, Header, Link, AuthMenu } from './AppBar.styled';
import { UserMenu } from './UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectorsAuth';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container>
      <Header>
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
      </Header>
    </Container>
  );
};
