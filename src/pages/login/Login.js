import { Button, Form, Input, Label } from 'components';
import React from 'react';

const Login = () => {
  return (
    <main>
      <Form>
        <Label>Login:</Label>
        <Input type="text" />
        <Label>Hasło:</Label>
        <Input type="password" />
        <Button type="submit">Zaloguj</Button>
      </Form>
    </main>
  );
};

export default Login;
