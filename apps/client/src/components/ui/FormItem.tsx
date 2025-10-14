import type React from "react";
import { cn } from "../../utils/utils";

interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode[];
}

const FormItem = ({ children, className, ...props }: FormItemProps) => {
  return (
    <div className={cn("flex flex-col gap-1", className)} {...props}>
      {children}
    </div>
  );
};

export default FormItem;
