import type React from "react";
import { cn } from "../../utils/utils";
import {
  createContext,
  useContext,
  useEffect,
  useId,
  useState,
  type SetStateAction,
} from "react";

interface ProgressbarContextType {
  registerFill: (id: string, amount: number) => void;
  unregisterFill: (id: string) => void;
  progress: number;
  target: number;
}

const ProgressbarContext = createContext<ProgressbarContextType | null>(null);

const useProgressbarContext = () => {
  const context = useContext(ProgressbarContext);

  if (!context) {
    throw new Error("useProgressbarContext must be within Progress bar");
  }

  return context;
};

// PROGRESSBAR ELEMENT
interface ProgressbarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElement | React.ReactElement[];
  target: number;
}

export default function Progressbar({
  children,
  className,
  target,
  ...props
}: ProgressbarProps) {
  const [fills, setFills] = useState<Record<string, number>>({});

  const registerFill = (id: string, amount: number) => {
    setFills((prev) => ({ ...prev, [id]: amount }));
  };

  const unregisterFill = (id: string) => {
    setFills((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const totalFilled = Object.values(fills).reduce((a, b) => a + b, 0);
  const progress = Math.min(100, (totalFilled / target) * 100);

  return (
    <ProgressbarContext.Provider
      value={{ progress, registerFill, unregisterFill, target }}
    >
      <div className="flex flex-col gap-3.25">
        <div
          {...props}
          className={cn(
            className,
            "flex overflow-hidden rounded-sm h-2 bg-beige-100 [&>*:not(:last-child)]:rounded-r-[0] [&>*:not(:first-child)]:rounded-l-[0] gap-0.5"
          )}
        >
          {children}
        </div>
        <div className="flex justify-between items-center text-preset-5 text-grey-500">
          <span className="font-bold">{progress}%</span>
          <span>Target of ${target}</span>
        </div>
      </div>
    </ProgressbarContext.Provider>
  );
}

// PROGRESSFILL ELEMENT
interface ProgressfillProps extends React.HTMLAttributes<HTMLDivElement> {
  fillAmount: number;
}

export function Progressfill({
  fillAmount,
  className,
  ...props
}: ProgressfillProps) {
  const { registerFill, unregisterFill, target } = useProgressbarContext();
  const id = useId();

  useEffect(() => {
    registerFill(id, fillAmount);
    return () => unregisterFill(id);
  }, [id, fillAmount]);

  return (
    <div
      {...props}
      className={cn(className, `h-full bg-green rounded-sm`)}
      style={{ width: `${(fillAmount / target) * 100}%` }}
    ></div>
  );
}
