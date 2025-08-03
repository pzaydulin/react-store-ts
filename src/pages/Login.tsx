import LoginForm from "@app/components/LoginForm";
import Card from "@app/shared/components/Card";

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center p-4">
      <Card title="Autherization" className="w-full max-w-md">
        <LoginForm />
      </Card>
    </div>
  );
}
