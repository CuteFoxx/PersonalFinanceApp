import Button from "../ui/Button";
import FormItem from "../ui/FormItem";
import Input from "../ui/Input";
import Label from "../ui/Label";

const LoginForm = () => {
  return (
    <form className="form">
      <h2 className="text-preset-1">Login</h2>
      <div>
        <FormItem>
          <Label>Email</Label>
          <Input />
        </FormItem>
      </div>
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
