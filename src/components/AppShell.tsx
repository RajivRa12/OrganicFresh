"use client";

import { usePathname } from "next/navigation";
import { BottomNav } from "@/components/BottomNav";
import { Footer } from "@/components/Footer";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className={`flex-grow ${!isLoginPage ? "pb-24" : ""}`}>
        {children}
      </main>
      {!isLoginPage && <Footer />}
      {!isLoginPage && <BottomNav />}
    </div>
  );
}
