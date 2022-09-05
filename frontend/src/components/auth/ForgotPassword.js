import React from "react";
import Container from "../Container";
import CustomLink from "../CustomLink";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import Title from "../form/Title";

export default function ForgotPassword() {
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-8 w-96 space-y-8" action="">
          <Title>Please enter your email</Title>
          <FormInput label="Email" name="email" placeholder="john@email.com" />
          <Submit value="Send Link" />
          <div className="flex justify-between text-sm">
            <CustomLink to="/auth/sign-in">Sign in</CustomLink>
            <CustomLink to="/auth/sign-up">Sign up</CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
}
