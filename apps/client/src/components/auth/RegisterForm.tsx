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
import { Link } from "@tanstack/react-router";

const schema = z.object({
  name: z.string().min(3),
  email: z.email(),
  password: z.string().min(6),
});

type FormFileds = z.infer<typeof schema>;

const RegisterForm = () => {
  const emailId = useId();
  const passwordId = useId();
  const nameId = useId();

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
      .post("/auth/signup", data)
      .then((res) => console.log(res.data))
      .catch((err) => setError("root", { message: err.response.data.message }));
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-preset-1">Sign Up</h2>
      <div className="flex flex-col gap-4">
        <FormItem>
          <Label htmlFor={nameId}>Name</Label>
          <Input autoComplete="email" id={nameId} {...register("name")} />
          {errors.name && <FormError>{errors.name.message}</FormError>}
        </FormItem>
        <FormItem>
          <Label htmlFor={emailId}>Email</Label>
          <Input autoComplete="email" id={emailId} {...register("email")} />
          {errors.email && <FormError>{errors.email.message}</FormError>}
        </FormItem>
        <FormItem>
          <Label htmlFor={passwordId}>Create password</Label>
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
        Already have an account?{" "}
        <Link to="/auth/login" className="font-bold text-grey-900 underline">
          Login
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
