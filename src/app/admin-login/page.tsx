"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username === "admin" && password === "@987654321@") {
      router.push("/admin");
    } else {
      alert("نام کاربری یا رمز اشتباه است");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center" dir="rtl">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-yellow-700 mb-6 text-center">
          ورود ادمین
        </h1>

        <div className="space-y-4">
          <input
            placeholder="نام کاربری"
            className="w-full border rounded-xl p-3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="رمز عبور"
            className="w-full border rounded-xl p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-black text-white py-3 rounded-xl"
          >
            ورود
          </button>
        </div>
      </div>
    </main>
  );
}