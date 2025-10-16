import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { store } from "../../redux/store";
import Sidebar from "../../components/Sidebar";

export const Route = createFileRoute("/_dashboard")({
  beforeLoad: () => {
    const state = store.getState();
    const token = state.users.accessToken;

    if (!token) {
      throw redirect({ to: "/login" });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="xl:grid xl:grid-cols-[1fr_5fr] min-h-screen">
      <Sidebar />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}
