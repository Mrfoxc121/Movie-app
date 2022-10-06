import { commonModalClasses } from "../../utils/theme";
import Container from "../Container";
import FormContainer from "../form/FormContainer";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import Title from "../form/Title";

export default function ConformPassword() {
  return (
    <FormContainer>
      <Container>
        <form className={commonModalClasses + " w-96"} action="">
          <Title>Enter New Password</Title>
          <FormInput
            label="New Password"
            type="password"
            name="password"
            placeholder="********"
          />
          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmpassword"
            placeholder="********"
          />
          <Submit value="Confirm Password" />
        </form>
      </Container>
    </FormContainer>
  );
}
