import { createFileRoute, redirect } from "@tanstack/react-router";
import { store } from "../redux/store";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    const state = store.getState();
    const token = state.users.accessToken;

    if (!token) {
      throw redirect({ to: "/auth/login" });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/"!</div>;
}
