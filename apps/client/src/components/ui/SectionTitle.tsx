import { cn } from "../../utils/utils";

interface SectionTitleProps
  extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  children: React.ReactElement | React.ReactNode;
}

const SectionTitle = ({ children, className, ...rest }: SectionTitleProps) => {
  return (
    <h2 className={cn("text-preset-1", className)} {...rest}>
      {children}
    </h2>
  );
};

export default SectionTitle;
