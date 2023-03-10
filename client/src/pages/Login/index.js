import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../api';
import { Form, FormButton, FormInput, FormLabel, FormText } from '../../components/common/FormElements';
import { PageContainer, PageHeader, PageHeaderText } from '../../components/common/PageElements';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const data = { email, password };
    try {
      const response = await api.login(data);
      if (response.status === 200) {
        toast.success('Login succesful');
        localStorage.setItem('token', response.data);
        return location.pathname === '/' ? navigate(0) : navigate('/');
      }
    } catch (e) {
      switch (e.response.status) {
        case 400:
          toast.error('User does not exist or password incorrect');
          break;
        default:
          toast.error('Unexpected error, please try again');
          break;
      }
    }
  };

  return (
    <>
      <PageContainer>
        <PageHeader>
          <PageHeaderText>Login</PageHeaderText>
        </PageHeader>
        <Form onSubmit={handleSubmit}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          ></FormInput>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          ></FormInput>

          <FormButton>LOGIN</FormButton>
          <FormText>
            Don't have an account? <a href="/register">Sign up here!</a>
          </FormText>
        </Form>
      </PageContainer>
    </>
  );
};

export default Login;
