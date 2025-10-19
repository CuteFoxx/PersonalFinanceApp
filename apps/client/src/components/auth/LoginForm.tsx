import Button from "../ui/Button";
import FormItem from "../ui/FormItem";
import Input from "../ui/Input";
import Label from "../ui/Label";
import { z } from "zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "../ui/FormError";
import { useId } from "react";
import PasswordInput from "../ui/PasswordInput";
import axios from "axios";
import { Link, useNavigate } from "@tanstack/react-router";
import { useAppDispatch } from "../../redux/hooks";
import { setCurrentUser } from "../../redux/userSlice";
import type { User } from "../../types/user";

const schema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

interface LoginResponse extends User {
  access_token: string;
}

type FormFileds = z.infer<typeof schema>;

const LoginForm = () => {
  const emailId = useId();
  const passwordId = useId();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormFileds>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFileds> = (data) => {
    axios
      .post("/auth/login", data)
      .then((res) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { access_token: _, ...user } = res.data as LoginResponse;
        dispatch(setCurrentUser({ ...user }));
        console.log(res);

        navigate({ to: "/", replace: true });
      })
      .catch((err) => setError("root", { message: err.response.data.message }));
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-preset-1">Login</h2>
      <div className="flex flex-col gap-4">
        <FormItem>
          <Label htmlFor={emailId}>Email</Label>
          <Input autoComplete="email" id={emailId} {...register("email")} />
          {errors.email && <FormError>{errors.email.message}</FormError>}
        </FormItem>
        <FormItem>
          <Label htmlFor={passwordId}>Password</Label>
          <PasswordInput
            id={passwordId}
            {...register("password")}
            autoComplete="on"
          />
          {errors.password && <FormError>{errors.password.message}</FormError>}
        </FormItem>
        {errors.root && <FormError>{errors.root.message}</FormError>}
      </div>
      <Button>Login</Button>
      <div className="mx-auto text-grey-500 text-preset-4">
        Need to create an account?{" "}
        <Link to="/signup" className="font-bold text-grey-900 underline">
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
