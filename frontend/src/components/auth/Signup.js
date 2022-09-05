import React from "react";
import Container from "../Container";
import CustomLink from "../CustomLink";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import Title from "../form/Title";

export default function Signup(to) {
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-8 w-72 space-y-8" action="">
          <Title>Sign up</Title>
          <FormInput label="Name" name="name" placeholder="John Doe" />
          <FormInput label="Email" name="email" placeholder="john@email.com" />
          <FormInput label="Password" name="password" placeholder="********" />
          <Submit value={"Sign up"} />
          <div className="flex justify-between text-sm">
            <CustomLink to='/auth/forgot-password'>Forgot Password</CustomLink>
            <CustomLink to='/auth/sign-in'>Sign in</CustomLink>
            
          </div>
        </form>
      </Container>
    </div>
  );
}