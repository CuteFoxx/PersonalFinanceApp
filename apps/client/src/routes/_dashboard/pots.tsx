import { createFileRoute } from "@tanstack/react-router";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Pot } from "../../types/pot";
import { useAppSelector } from "../../redux/hooks";
import Pots from "../../components/pots/Pots";
export const Route = createFileRoute("/_dashboard/pots")({
  component: RouteComponent,
});

function RouteComponent() {
  const currentUser = useAppSelector((root) => root.users.currentUser);
  const [pots, setPots] = useState<Pot[] | null>(null);

  useEffect(() => {
    axios
      .get(`pots`, {
        params: {
          userId: currentUser?.id,
        },
      })
      .then((res) => setPots(res.data));
  }, [currentUser]);

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
