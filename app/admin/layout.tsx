"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { isAuthenticated, updateActivity } from "@/lib/auth";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/admin/login") return;
    if (!isAuthenticated()) {
      router.push("/admin/login");
      return;
    }
    updateActivity();
  }, [router, pathname]);

  return <>{children}</>;
}