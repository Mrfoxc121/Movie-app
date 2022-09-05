import React from "react";
import Container from "../Container";
import CustomLink from "../CustomLink";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import Title from "../form/Title";

export default function Signin() {
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-8 w-72 space-y-8" action="">
          <Title>Sign in</Title>
          <FormInput label="Email" name="email" placeholder="john@email.com" />
          <FormInput label="Password" name="password" placeholder="********" />
          <Submit value={"Sign in"} />
          <div className="flex justify-between text-sm">
          <CustomLink to='/auth/forgot-password'>Forgot Password</CustomLink>
          <CustomLink to='/auth/sign-up'>Sign up</CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
}
