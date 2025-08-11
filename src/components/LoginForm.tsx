import * as React from "react";
import { z } from "zod";
import { Field } from "@base-ui-components/react/field";
import { Form } from "@base-ui-components/react/form";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@app/core/contexts/AuthContext";

const schema = z.object({
  name: z.string().min(4, "Name must be at least 4 characters long"),
  password: z.string().min(4, "Password must be at least 4 characters long"),
});

export default function LoginForm() {
  const { login, isLoading, errorMsg } = useAuth();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState<Record<string, string[]>>({});
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || "/login";

  async function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const result = schema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
      return {
        errors: z.flattenError(result.error).fieldErrors,
      };
    }

    await login({ username, password });

    navigate(from, { replace: true });

    // try {
    //   // setIsLoading(true);
    //   const response = await axios.post("https://fakestoreapi.com/auth/login", {
    //     username,
    //     password,
    //   });

    //   login(response.data.token); // Call login from AuthContext
    //   navigate(from, { replace: true });
    //   // можно сделать навигацию или setUser state для сохранения пользователя
    // } catch (error) {
    //   if (axios.isAxiosError(error) && error.response) {
    //     return {
    //       errors: {
    //         _form: [error.response.data.message || "Invalid credentials"],
    //       },
    //     };
    //   }
    //   return {
    //     errors: {
    //       _form: ["An unexpected error occurred"],
    //     },
    //   };
    // } finally {
    //   // setIsLoading(false);
    // }

    return { errors: {} };
  }

  return (
    <Form
      className="flex w-full flex-col gap-4 mt-2"
      errors={errors}
      onClearErrors={() => setErrors({})}
      onSubmit={async (event) => {
        const response = await submitForm(event);
        setErrors(response.errors);
      }}
    >
      <Field.Root name="name" className="flex flex-col items-start gap-1">
        <Field.Label className="text-sm font-medium">Name</Field.Label>
        <Field.Control
          placeholder="Enter name"
          className="h-10 w-full rounded-md border border-border bg-muted pl-3.5 text-base focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-primary"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Field.Error className="text-sm text-red-500" />
      </Field.Root>

      <Field.Root name="password" className="flex flex-col items-start gap-1">
        <Field.Label className="text-sm font-medium">Password</Field.Label>
        <Field.Control
          type="password"
          placeholder="Enter password"
          className="h-10 w-full rounded-md border border-border bg-muted pl-3.5 text-base focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-primary"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Field.Error className="text-sm text-red-500" />
      </Field.Root>

      {/* Общая ошибка формы */}
      {errorMsg && <div className="text-sm text-red-500">{errorMsg}</div>}

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium  disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary_foreground hover:bg-primary/80 active:bg-primary h-10 px-4 py-2 w-full"
      >
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </Form>
  );
}

// TODO проверить почему после ошибки от сервера, страница перезагружается
