import { Input, Label } from 'components';
import React from 'react';

const Login = () => {
  return (
    <div>
      Login
      <Label>
        Login:
        <Input />
      </Label>
      <Label>
        Hasło:
        <Input />
      </Label>
    </div>
  );
};

export default Login;
