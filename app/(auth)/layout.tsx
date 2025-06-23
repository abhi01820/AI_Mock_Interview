export const dynamic = 'force-dynamic';

import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/actions/auth.action";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if (isUserAuthenticated) {
    redirect("/"); // ✅ Send already logged-in users to home
  }

  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
