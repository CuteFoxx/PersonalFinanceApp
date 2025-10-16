import { createFileRoute, Outlet } from "@tanstack/react-router";
import Sidebar from "../../components/Sidebar";

export const Route = createFileRoute("/_dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
