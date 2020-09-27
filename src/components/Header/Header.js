import React from 'react';
import { Container, Logo, Navigation, Link } from './header.css';
import herb from 'img/herb.png';
import { useSelector } from 'react-redux';
const Header = () => {
  const user = useSelector((state) => state.user);
  return (
    <Container>
      <Logo>
        <img src={herb} alt="herb" />
        <h1>Pilica</h1>
      </Logo>
      <Navigation>
        <Link exact to={`/`}>
          Strona główna
        </Link>
        <Link to={`/news`}>Aktualności</Link>
        <Link to={`/history`}>Historia</Link>
        {!user.logged ? (
          <Link to={`/login`}>Logowanie</Link>
        ) : (
          <Link to={`/new`}>{user.login}</Link>
        )}
      </Navigation>
    </Container>
  );
};

export default Header;
