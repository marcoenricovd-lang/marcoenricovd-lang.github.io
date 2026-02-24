"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Shield, Lock, AlertCircle, Loader2, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { loginAdmin, isAccountLocked, getLockoutTimeRemaining, isAuthenticated } from "@/lib/auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [lockoutMinutes, setLockoutMinutes] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/admin");
      return;
    }
    checkLockout();
  }, [router]);

  const checkLockout = () => {
    const locked = isAccountLocked();
    setIsLocked(locked);
    if (locked) setLockoutMinutes(getLockoutTimeRemaining());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (isAccountLocked()) {
      setIsLocked(true);
      setLockoutMinutes(getLockoutTimeRemaining());
      setIsLoading(false);
      return;
    }

    const result = await loginAdmin(password);
    
    if (result.success) {
      router.push("/admin");
    } else {
      setError(result.error || "Login failed");
      checkLockout();
    }
    setIsLoading(false);
  };

  if (isLocked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Account Locked</h1>
          <p className="text-gray-600 mb-6">
            Too many failed attempts. Try again in <span className="font-bold text-red-600">{lockoutMinutes} minutes</span>.
          </p>
          <Link href="/" className="text-pink-600 hover:text-pink-700 font-medium">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-pink-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
          <p className="text-gray-500 text-sm mt-1">StyLash Booking System</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Admin Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none"
                placeholder="Enter password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || !password}
            className="w-full py-3 bg-pink-600 text-white rounded-xl font-medium hover:bg-pink-700 disabled:bg-gray-300 flex items-center justify-center gap-2"
          >
            {isLoading ? <><Loader2 className="w-5 h-5 animate-spin" />Verifying...</> : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/" className="text-gray-500 hover:text-gray-700 text-sm">Back to Website</Link>
        </div>
      </div>
    </div>
  );
}