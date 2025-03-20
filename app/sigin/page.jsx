"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSignIn, useSignUp } from "@clerk/nextjs";

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  async function onSubmit(event) {
      event.preventDefault();
      setIsLoading(true);
      
      setTimeout(() => {
          setIsLoading(false);
        }, 1000);
    }
    
    const { signIn } = useSignIn();
    const { signUp } = useSignUp();
  const hanldeAuthenticateUsingSocial = async (provider) => {
    try {
      if (activeTab === "login") {
        await signIn.authenticateWithRedirect({
          strategy: `oauth_${provider}`,
          redirectUrl: "/",
          redirectUrlComplete: "/",
        });
      } else {
        await signUp.authenticateWithRedirect({
          strategy: `oauth_${provider}`,
          redirectUrl: "/",
          redirectUrlComplete: "/",
        });
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  //   const hanldeAuthenticateUsingSocial = async (provider) => {
  //     try {
  //       if (activeTab === "signup" && signUp) {
  //         await signUp.authenticateWithRedirect({
  //           strategy: `oauth_${provider}`,
  //           redirectUrl: "/",
  //           redirectUrlComplete: "/",
  //         })
  //       } else if (activeTab === "login" && signIn) {
  //         await signIn.authenticateWithRedirect({
  //           strategy: `oauth_${provider}`,
  //           redirectUrl: "/",
  //           redirectUrlComplete: "/",
  //         })
  //       }
  //     } catch (error) {
  //       console.error("Authentication error:", error)
  //     }
  //   }

  return (
    <div className="flex  flex-col items-center justify-center md:grid  md:gap-0">
      <div className="w-full flex justify-center items-center max-w-md p-8 md:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-gray-500">
              Sign in to your account or create a new one
            </p>
          </div>

          {/* Custom Tabs */}
          <div className="w-full">
            <div className="flex w-full border-b">
              <button
                onClick={() => setActiveTab("login")}
                className={`w-1/2 py-2 cursor-pointer text-center font-medium ${
                  activeTab === "login"
                    ? "border-b-2 border-purple-600 text-purple-600"
                    : "text-gray-500"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab("signup")}
                className={`w-1/2 py-2 cursor-pointer text-center font-medium ${
                  activeTab === "signup"
                    ? "border-b-2 border-purple-600 text-purple-600"
                    : "text-gray-500"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Login Form */}
            {activeTab === "login" && (
              <div className="mt-6 grid gap-6">
                <form onSubmit={onSubmit}>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        placeholder="name@example.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={isLoading}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="text-sm font-medium"
                        >
                          Password
                        </label>
                        <Link
                          href="/forgot-password"
                          className="text-sm font-medium text-purple-600 hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <input
                        id="password"
                        type="password"
                        autoCapitalize="none"
                        autoComplete="current-password"
                        disabled={isLoading}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <button
                      disabled={isLoading}
                      className="inline-flex cursor-pointer h-10 items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                    >
                      {isLoading && (
                        <svg
                          className="mr-2 h-4 w-4 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                      )}
                      Sign In
                    </button>
                  </div>
                </form>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={() => hanldeAuthenticateUsingSocial("google")}
                    className="inline-flex h-10 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    <Image
                      src={
                        "https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
                      }
                      alt="google icon"
                      width={19}
                      height={19}
                    />
                  </button>
                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={() => hanldeAuthenticateUsingSocial("github")}
                    className="inline-flex h-10 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    <Image
                      src="https://cdn.creazilla.com/icons/3242890/github-icon-size_512.png"
                      alt="github icon"
                      width="23"
                      height="23"
                    />
                  </button>
                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={() => hanldeAuthenticateUsingSocial("facebook")}
                    className="inline-flex h-10 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    <Image
                      src="https://cdn-icons-png.freepik.com/256/5968/5968764.png?semt=ais_hybrid"
                      alt="facebook icon"
                      width="19"
                      height="19"
                    />
                  </button>
                </div>
              </div>
            )}

            {/* Signup Form */}
            {activeTab === "signup" && (
              <div className="mt-6 grid gap-6">
                <form onSubmit={onSubmit}>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium"
                        >
                          First name
                        </label>
                        <input
                          id="first-name"
                          placeholder="John"
                          disabled={isLoading}
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium"
                        >
                          Last name
                        </label>
                        <input
                          id="last-name"
                          placeholder="Doe"
                          disabled={isLoading}
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="email-signup"
                        className="text-sm font-medium"
                      >
                        Email
                      </label>
                      <input
                        id="email-signup"
                        placeholder="name@example.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={isLoading}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="password-signup"
                        className="text-sm font-medium"
                      >
                        Password
                      </label>
                      <input
                        id="password-signup"
                        type="password"
                        autoCapitalize="none"
                        autoComplete="new-password"
                        disabled={isLoading}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <button
                      disabled={isLoading}
                      className="inline-flex cursor-pointer h-10 items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                    >
                      {isLoading && (
                        <svg
                          className="mr-2 h-4 w-4 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                      )}
                      Create Account
                    </button>
                  </div>
                </form>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={() => hanldeAuthenticateUsingSocial("google")}
                    className="inline-flex h-10 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    <Image
                      src={
                        "https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
                      }
                      alt="google icon"
                      width={19}
                      height={19}
                    />
                  </button>
                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={() => hanldeAuthenticateUsingSocial("github")}
                    className="inline-flex h-10 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    <Image
                      src="https://cdn.creazilla.com/icons/3242890/github-icon-size_512.png"
                      alt="github icon"
                      width="23"
                      height="23"
                    />
                  </button>
                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={() => hanldeAuthenticateUsingSocial("facebook")}
                    className="inline-flex h-10 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    <Image
                      src="https://cdn-icons-png.freepik.com/256/5968/5968764.png?semt=ais_hybrid"
                      alt="facebook icon"
                      width="19"
                      height="19"
                    />
                  </button>
                </div>
              </div>
            )}

            <p className="mt-6 text-center text-sm text-gray-500">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="font-medium text-purple-600 hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="font-medium text-purple-600 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
