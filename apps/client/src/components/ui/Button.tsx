import { cn } from "../../utils/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactElement | React.ReactNode;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-grey-900  min-h-13.25 rounded-lg text-preset-4 font-bold text-white cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
