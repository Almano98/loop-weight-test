import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50rem;
  border: 3px solid #92cece;
  border-radius: 20px;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    width: 85%;
    border: 2px solid #92cece;
  }
`;

export const FormInput = styled.input`
  margin: 0.5rem;
  height: 2rem;
  border: 1.5px solid #92cece;
  border-radius: 5px;
  padding-left: 0.5rem;
`;

export const FormButton = styled.button`
  margin: 0.5rem;
  height: 2rem;
  border: 1px solid #92cece;
  border-radius: 10px;
  background: #92cece;
  color: white;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  min-width: 8rem;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 25px 40px -5px rgba(#000, 0.3),
      inset 0px 0px 0px 0px rgba($red, 0), inset 0px -27px 0px 0px $red2;
  }
  &:active {
    transform: translateY(4px);
  }
`;

export const FormLabel = styled.label`
  margin: 0.5rem;
`;

export const FormText = styled.p`
  margin: 0.5rem;
`;

export const FormLink = styled.a``;
