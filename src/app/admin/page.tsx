import LoginForm from "@/components/admin/LoginForm";

export default function AdminPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-center mb-8 text-black">
          관리자 로그인
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
