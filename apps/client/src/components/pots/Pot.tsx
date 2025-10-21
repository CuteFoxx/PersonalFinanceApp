import type { Pot as PotType } from "../../types/pot";
import Progressbar, { Progressfill } from "../ui/Progressbar";

const Pot = ({ pot }: { pot: PotType }) => {
  return (
    <div className="bg-white rounded-xl py-6 px-5 md:px-6 flex flex-col gap-8">
      <div>
        <h3 className="text-preset-2">{pot.name}</h3>
      </div>
      <div className="flex flex-col gap-3.25 md:gap-4">
        <div className="flex justify-between items-center">
          <span>Total saved:</span>
          <span className="text-preset-1">${pot.balance}</span>
        </div>
        <Progressbar target={pot.targetBalance}>
          <Progressfill fillAmount={pot.balance} />
        </Progressbar>
      </div>
    </div>
  );
};

export default Pot;
