"use client";
import React, { useEffect } from 'react';
import { useAuth } from "@clerk/nextjs";
import Home from "@/app/components/Home/page";
// import ThemeToggle from "@/app/components/ThemeToggle";

const Page = () => { // Change 'page' to 'Page' (uppercase)
  const { getToken } = useAuth();

  useEffect(() => {
    async function fetchToken() {
      try {
        const token = await getToken({ template: "tokens" });
        console.log("JWT Token:", token);
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    }

    fetchToken();
  }, [getToken]); // Include 'getToken' in the dependency array

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white transition-colors duration-300">
      {/* <ThemeToggle /> */}
      <Home />
    </main>
  );
};

export default Page; // Export Page instead of page
