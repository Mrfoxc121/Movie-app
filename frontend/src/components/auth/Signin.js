import { commonModalClasses } from "../../utils/theme";
import Container from "../Container";
import CustomLink from "../CustomLink";
import FormContainer from "../form/FormContainer";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import Title from "../form/Title";

export default function Signin() {


  return (
    <FormContainer>
      <Container>
        <form className={commonModalClasses + " w-72"} action="">
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
    </FormContainer>
  );
}
