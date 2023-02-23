import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { Form, FormButton, FormInput, FormLabel, FormText } from '../../components/common/FormElements';
import { PageContainer, PageHeader, PageHeaderText } from '../../components/common/PageElements';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const data = { email, password };
    try {
      const response = await api.login(data);
      if (response.status === 200) {
        console.log(response.data);
        return navigate('/');
      }
    } catch (e) {
      console.log(e);
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
