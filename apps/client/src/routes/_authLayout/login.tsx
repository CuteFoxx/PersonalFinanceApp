import { createFileRoute } from "@tanstack/react-router";
import LoginForm from "../../components/auth/LoginForm";

export const Route = createFileRoute("/_authLayout/login")({
  component: LoginPage,
});

function LoginPage() {
  return <LoginForm />;
}
