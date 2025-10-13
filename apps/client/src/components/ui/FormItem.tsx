import type React from "react";
import { cn } from "../../utils/utils";

interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement[];
}

const FormItem = ({ children, ...props }: FormItemProps) => {
  const { className, ...rest } = props;
  return (
    <div className={cn(className, "flex flex-col gap-1")} {...rest}>
      {children}
    </div>
  );
};

export default FormItem;
