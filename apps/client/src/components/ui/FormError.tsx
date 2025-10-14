import { cn } from "../../utils/utils";

interface FormErorProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElement | React.ReactNode;
}

const FormError = ({ children, className, ...props }: FormErorProps) => {
  return (
    <div className={cn("text-preset-5 text-red", className)} {...props}>
      {children}
    </div>
  );
};

export default FormError;
