import Container from "../Container";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import Title from "../form/Title";

export default function ConformPassword() {
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-8 w-96 space-y-8" action="">
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
    </div>
  );
}
