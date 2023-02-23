import React, { useRef } from "react";
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

const Register = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logging in!");
  };

  return (
    <>
      <PageContainer>
        <PageHeader>
          <PageHeaderText>Register</PageHeaderText>
        </PageHeader>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput id="email" type="email" name="email"></FormInput>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput id="password" type="password" name="password"></FormInput>

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
