import { createFileRoute } from "@tanstack/react-router";
import RegisterForm from "../../components/auth/RegisterForm";

export const Route = createFileRoute("/_authLayout/signup")({
  component: SignupPage,
});

function SignupPage() {
  return <RegisterForm />;
}
