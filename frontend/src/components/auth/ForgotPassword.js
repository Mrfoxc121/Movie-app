import React from "react";
import { commonModalClasses } from "../../utils/theme";
import Container from "../Container";
import CustomLink from "../CustomLink";
import FormContainer from "../form/FormContainer";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import Title from "../form/Title";

export default function ForgotPassword() {
  return (
    <FormContainer>
      <Container>
        <form className={commonModalClasses + " w-96"} action="">
          <Title>Please enter your email</Title>
          <FormInput label="Email" name="email" placeholder="john@email.com" />
          <Submit value="Send Link" />
          <div className="flex justify-between text-sm">
            <CustomLink to="/auth/sign-in">Sign in</CustomLink>
            <CustomLink to="/auth/sign-up">Sign up</CustomLink>
          </div>
        </form>
      </Container>
    </FormContainer>
  );
}
