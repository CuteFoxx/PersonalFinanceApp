import { cn } from "../../utils/utils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode | React.ReactElement;
}

const Label = ({ children, className, ...props }: LabelProps) => {
  return (
    <label
      {...props}
      className={cn("text-preset-5 font-bold text-grey-500", className)}
    >
      {children}
    </label>
  );
};

export default Label;
