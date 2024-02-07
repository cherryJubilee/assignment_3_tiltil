import { AuthProvider } from "@/app/(providers)/_contexts/auth.context";
import Header from "./_components/Header";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div id="root" className="bg-red-50">
        <Header />
        {children}
      </div>
    </AuthProvider>
  );
}

export default RootLayout;
