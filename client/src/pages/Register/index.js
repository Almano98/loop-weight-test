import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { Form, FormButton, FormInput, FormLabel, FormText } from '../../components/common/FormElements';
import { PageContainer, PageHeader, PageHeaderText } from '../../components/common/PageElements';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const data = { email, password };
    try {
      const response = await api.signUp(data);
      if (response.status === 200) {
        localStorage.setItem('token', response.data);
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
          <PageHeaderText>Register</PageHeaderText>
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

          <FormButton>Register</FormButton>
          <FormText>
            Have an account? <a href="/login">Login here!</a>
          </FormText>
        </Form>
      </PageContainer>
    </>
  );
};

export default Register;
