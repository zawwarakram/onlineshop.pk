"use client";

import { useEffect, useState } from "react";
import { useSignIn, useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { Facebook } from "lucide-react";

async function sendUserData(data) {
  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to send user data");
    return res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const { signIn } = useSignIn();

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      await signIn?.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/",
        redirectUrlComplete: "/",
      });
    } catch (err) {
      console.error("Google login failed:", err);
      toast.error("Google login failed");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      sendUserData({
        email: user.primaryEmailAddress.emailAddress,
        username: user.username || "google_user",
        provider: "google",
      })
        .then(() => toast.success("Email sent after login!"))
        .catch(() => toast.error("Email send failed"));
    }
  }, [user?.primaryEmailAddress?.emailAddress]);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full space-y-6">
        <h1 className="text-2xl font-bold text-center">Welcome</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Get Started
        </button>

        {isOpen && (
          <div className="space-y-4">
            <div className="text-center text-gray-500 text-sm">Continue with</div>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="flex items-center justify-center border px-4 py-2 rounded-lg hover:bg-gray-50"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">...</svg>
                Google
              </button>
              <button
                onClick={() => toast("Facebook login not implemented")}
                className="flex items-center justify-center px-4 py-2 bg-[#1877F2] text-white rounded-lg"
              >
                <Facebook className="w-5 h-5 mr-2" />
                Facebook
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
