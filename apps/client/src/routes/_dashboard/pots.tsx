import { createFileRoute } from "@tanstack/react-router";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";
import { useEffect } from "react";
import axios from "axios";
export const Route = createFileRoute("/_dashboard/pots")({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    axios
      .get(`pots`, {
        params: {
          userId: 1,
        },
      })
      .then((res) => console.log(res.data));
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <SectionTitle>Pots</SectionTitle>
        <Button>+ Add New Pot</Button>
      </div>
    </>
  );
}
