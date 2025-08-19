
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Leaf, UserPlus, User, BarChart, CloudSun } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/crops", icon: Leaf, label: "Crops" },
  { href: "/join", icon: UserPlus, label: "Join" },
  { href: "/market", icon: BarChart, label: "Market" },
  { href: "/weather", icon: CloudSun, label: "Weather" },
  { href: "/profile", icon: User, label: "Profile" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card shadow-t-lg md:hidden">
      <div className="grid h-16" style={{ gridTemplateColumns: `repeat(${navItems.length}, 1fr)`}}>
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 text-sm font-medium transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
