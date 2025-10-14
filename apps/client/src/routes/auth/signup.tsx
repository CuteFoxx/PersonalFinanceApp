import { createFileRoute } from "@tanstack/react-router";
import RegisterForm from "../../components/auth/RegisterForm";

export const Route = createFileRoute("/auth/signup")({
  component: SignupPage,
});

function SignupPage() {
  return <RegisterForm />;
}
