import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormButton,
  FormInput,
  FormLabel,
  FormText,
} from "../../components/common/FormElements";
import {
  PageContainer,
  PageHeader,
  PageHeaderText,
} from "../../components/common/PageElements";

const Login = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    return navigate("/");
  };

  return (
    <>
      <PageContainer>
        <PageHeader>
          <PageHeaderText>Login</PageHeaderText>
        </PageHeader>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput id="email" type="email" name="email"></FormInput>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput id="password" type="password" name="password"></FormInput>

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
