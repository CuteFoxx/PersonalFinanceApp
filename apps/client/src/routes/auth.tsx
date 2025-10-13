import { createFileRoute, Outlet } from "@tanstack/react-router";
import Logo from "../assets/logo-large.svg?react";
import Illustration from "../assets/illustration-authentication.svg?react";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="xl:grid xl:grid-cols-[35rem_1fr] xl:p-5  xl:gap-40 xl:items-center container relative ">
      <header className="py-6 flex items-center justify-center rounded-b-[0.5rem]  xl:rounded-[0.75rem] h-full xl:p-0 xl:overflow-hidden  xl:min-h-[calc(100vh-var(--spacing)*10)] xl:flex xl:flex-col xl:justify-center text-white before:content-[''] before:w-full before:h-full before:-z-2 before:bg-grey-900 relative before:absolute overflow-hidden">
        <Logo className="xl:absolute xl:top-10 xl:left-10" />
        <Illustration className="hidden xl:block xl:w-full xl:h-230  w-full h-[80%] absolute top-0 left-0 -z-1" />
        <div className="max-w-[80%] xl:flex hidden xl:flex-col gap-6 xl:pb-10 xl:mt-auto">
          <h1 className="text-preset-1">
            Keep track of your money and save for your future
          </h1>
          <p className="text-preset-4">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
      </header>
      <div className="xl:max-w-150">
        <Outlet />
      </div>
    </div>
  );
}
