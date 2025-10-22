import { createFileRoute } from "@tanstack/react-router";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";
import type { Pot } from "../../types/pot";
import { useAppSelector } from "../../redux/hooks";
import Pots from "../../components/pots/Pots";
import useFetch from "../../hooks/useFetch";
export const Route = createFileRoute("/_dashboard/pots")({
  component: RouteComponent,
});

function RouteComponent() {
  const currentUser = useAppSelector((root) => root.users.currentUser);

  const { result: pots } = useFetch<Pot[]>({
    url: "pots",
    method: "GET",
    config: {
      params: {
        userId: currentUser?.id,
      },
    },
  });

  return (
    <>
      <div className="flex justify-between items-center">
        <SectionTitle>Pots</SectionTitle>
        <Button>+ Add New Pot</Button>
      </div>
      {pots && <Pots pots={pots} />}
    </>
  );
}
