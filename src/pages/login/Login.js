import { Alert, Button, Form, Input, Label } from 'components';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { Row } from 'components/Form/form.css';
import React, { useState } from 'react';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [load, setLoad] = useState(false);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (login === '') {
      setErrorLogin(true);
    } else {
      setErrorLogin(false);
    }

    if (password === '') {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }

    if (errorLogin || errorPassword) {
      return;
    }
    setLoad(true);

    const formData = new FormData();
    formData.append('login', login);
    formData.append('password', password);

    const url = `${process.env.REACT_APP_API_URL}user/login.php`;
    fetch(url, { method: 'POST', body: formData })
      .then((response) => response.json())
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: response.user.login,
            text: response.user.email,
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Nie udało się zapisać ',
            text: `danych`,
          });
        }
        setLoad(false);
      });
    // .catch((error) => {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Nie udało się zapisać',
    //     text: error,
    //   });
    // });
  };

  return (
    <main>
      <Form onSubmit={handleSubmit}>
        <h1>Podaj dane logowania</h1>
        <Label>
          <AiOutlineUser />
          Login:
        </Label>
        <Input
          error={errorLogin}
          type="text"
          onChange={(e) => setLogin(e.target.value)}
        />
        <Label>
          <AiOutlineLock />
          Hasło:
        </Label>
        <Input
          error={errorPassword}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {(errorLogin || errorPassword) && (
          <Row>
            <Alert> Musisz wypełnić wszystkie pola</Alert>
          </Row>
        )}
        <Row>
          <Button ico={load && 'save'} type="submit">
            {load ? 'Logowanie' : 'Zaloguj'}
          </Button>
        </Row>
      </Form>
    </main>
  );
};

export default Login;
