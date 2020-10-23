import React from 'react';
import { Container, Logo, Navigation, Link } from './header.css';
import herb from 'img/herb.png';
import { useSelector } from 'react-redux';
const Header = () => {
 
  const user = useSelector((state) => state.user);
  const category = useSelector((state) => state.config.category);
  if (category===null) return "ładowanie";
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
        {category.map(item=><Link to={`/article/${item.id}`}>{item.name}</Link>)}
        <Link to={`/news`}>Aktualności</Link>
        <Link to={`/history`}>Historia</Link>
        {!user.logged ? (
          <Link to={`/login`}>Logowanie</Link>
        ) : (
          <Link to={`/panel`}>{user.login}</Link>
        )}
      </Navigation>
    </Container>
  );
};

export default Header;
