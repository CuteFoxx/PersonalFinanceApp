import { cn } from "../../utils/utils";
import ShowPasswordIcon from "../../assets/icon-show-password.svg?react";
import HidePasswordIcon from "../../assets/icon-hide-password.svg?react";
import { useState } from "react";
import Input from "./Input";

const PasswordInput = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <Input
        type={showPassword ? "text" : "password"}
        {...props}
        className={cn(className, "w-full")}
      />
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute top-1/2 -translate-y-1/2 right-5"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}
      </button>
    </div>
  );
};

export default PasswordInput;
