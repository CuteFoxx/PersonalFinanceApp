import { cn } from "../../utils/utils";
const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={cn(
        "min-h-11.25 border-1 border-beige-500 rounded-lg px-5 flex flex-col justify-center items-center",
        className
      )}
    />
  );
};

export default Input;
