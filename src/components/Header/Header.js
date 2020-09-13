import React from 'react';
import { Container, Logo, Navigation, Link } from './header.css';
import herb from 'img/herb.png';
const Header = () => {
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
        <Link to={`/historia`}>Historia</Link>
        <Link to={`/login`}>Logowanie</Link>
      </Navigation>
    </Container>
  );
};

export default Header;
