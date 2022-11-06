import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './AppBar.styled';
import { UserMenu } from './UserMenu';
export const AppBar = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/contacts">Contacts</Link>
          <div>
            <Link to="/registration">Registration</Link>
            <Link to="/login">Login</Link>
          </div>
        </nav>
        <UserMenu />
      </Header>
      <Suspense fallback={null}>
        {' '}
        <Outlet />
      </Suspense>
    </Container>
  );
};
