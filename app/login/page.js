"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { loginUser } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Please fill in both fields.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const result = loginUser(form);
      setLoading(false);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      router.push("/dashboard");
    }, 500);
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-purple-950 via-purple-700 to-purple-500 px-6 py-16">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-purple-500/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl sm:p-10">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-[0.2em] text-purple-700"
        >
          LATERAL
        </Link>

        <h1 className="mt-6 font-display text-2xl font-bold text-purple-950">
          Welcome back
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Log in to access your dashboard.
        </p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-600">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-purple-950 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-gray-600">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 pr-10 text-sm text-purple-950 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-700"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-pop flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600 disabled:opacity-70"
          >
            {loading && <Loader2 size={16} className="animate-spin" />}
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-purple-700 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
