import { cn } from "../../utils/utils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode | React.ReactElement;
}

const Label = ({ children, ...props }: LabelProps) => {
  const { className, ...rest } = props;
  return (
    <label
      {...rest}
      className={cn(className, "text-preset-5 font-bold text-grey-500")}
    >
      {children}
    </label>
  );
};

export default Label;
