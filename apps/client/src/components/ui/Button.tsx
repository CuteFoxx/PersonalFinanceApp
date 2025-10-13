import { cn } from "../../utils/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactElement | React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  const { className, ...rest } = props;
  return (
    <button
      className={cn(
        className,
        "bg-grey-900  min-h-13.25 rounded-lg text-preset-4 font-bold text-white cursor-pointer"
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
