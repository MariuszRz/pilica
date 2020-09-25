import { Button, Form, Input, Label } from 'components';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import { Row } from 'components/Form/form.css';
import React from 'react';

const Login = () => {
  return (
    <main>
      <Form>
        <h1>Podaj dane logowania</h1>
        <Label>
          <AiOutlineUser />
          Login:
        </Label>
        <Input type="text" />
        <Label>
          <AiOutlineLock />
          Hasło:
        </Label>
        <Input type="password" />
        <Row>
          <Button type="submit">Zaloguj</Button>
        </Row>
      </Form>
    </main>
  );
};

export default Login;
