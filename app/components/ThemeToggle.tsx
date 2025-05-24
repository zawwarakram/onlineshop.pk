// "use client"

// import { useEffect, useState } from "react"

// export default function ThemeToggle() {
//   const [isDark, setIsDark] = useState(() => {
//     // Check localStorage first
//     const storedTheme = localStorage.getItem("theme")
//     return storedTheme ? storedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
//   });


//   // Initialize theme based on system preference or stored preference
//   useEffect(() => {
//     // Check localStorage first
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     document.documentElement.classList.toggle("dark", isDark);

//   }, [])
// ..
//   const toggleTheme = () => {
//     const newTheme = !isDark
//     setIsDark(newTheme)
//     document.documentElement.classList.toggle("dark", newTheme)
//     localStorage.setItem("theme", newTheme ? "dark" : "light");
//     document.documentElement.classList.toggle("dark", newTheme);

//   }

//   return (
//     <button
//       onClick={toggleTheme}
//       className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 dark:bg-black/10 dark:border-black/20 shadow-lg transition-all hover:scale-110"
//       aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
//     >
//       {isDark ? (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6 text-yellow-300"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
//           />
//         </svg>
//       ) : (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6 text-indigo-700"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//           />
//         </svg>
//       )}
//     </button>
//   )
// }
