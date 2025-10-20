import type { Pot as PotType } from "../../types/pot";
import Pot from "./Pot";

const Pots = ({ pots }: { pots: PotType[] }) => {
  return (
    <div className="grid gap-6  xl:grid-cols-2">
      {pots.map((pot) => (
        <Pot pot={pot} />
      ))}
    </div>
  );
};

export default Pots;
