import LoginForm from "@app/components/LoginForm";
import Card from "@app/shared/components/Card";
import { useDocumentTitle } from "@app/shared/hooks/useDocumentTitle";

export default function LoginPage() {
  useDocumentTitle("Login");
  return (
    <div className="flex items-center  min-h-[calc(100vh-200px)] justify-center p-4">
      <Card title="Autherization" className="w-full max-w-md">
        <LoginForm />
        <center className="mt-4 text-xs text-muted_foreground/80">
          demo access: johnd/m38rmF$
        </center>
      </Card>
    </div>
  );
}
