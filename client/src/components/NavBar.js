import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Context } from '..';
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";

const NavBar = observer(() => {
  const { user } = useContext(Context);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>КупиДевайс</NavLink>

        {user.isAuth ? (
          <Nav className="ms-auto" style={{ color: 'white' }}>
            <Button variant="outline-light">Админ панель</Button>

            <Button className="ms-2" variant="outline-light" onClick={() => user.setIsAuth(false)}>Выйти</Button>
          </Nav>
        ) : (
          <Nav className="ms-auto" style={{ color: 'white' }}>
            <Button variant="outline-light" onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
