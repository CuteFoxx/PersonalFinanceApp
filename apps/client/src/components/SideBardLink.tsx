import { Link, type LinkProps } from "@tanstack/react-router";
import { Children } from "react";
import { cn } from "../utils/utils";

interface SideBardLinkProps extends LinkProps {
  children: React.ReactElement;
  className?: string;
  linkText: string;
}

const SideBardLink = ({
  children,
  linkText,
  className,
  ...rest
}: SideBardLinkProps) => {
  return (
    <Link className={cn(className, "link")} {...rest}>
      {children}
      <span>{linkText}</span>
    </Link>
  );
};

export default SideBardLink;
