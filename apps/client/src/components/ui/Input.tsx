import { cn } from "../../utils/utils";

const Input = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { className, ...rest } = props;
  return (
    <input
      {...rest}
      className={cn(
        className,
        "min-h-11.25 border-1 border-beige-500 rounded-lg px-5 flex flex-col justify-center items-center"
      )}
    />
  );
};

export default Input;
