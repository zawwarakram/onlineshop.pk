// "use client"

// import { useEffect } from "react"
// import { useSignIn, useSignUp } from "@clerk/nextjs"
// import { Loader2 } from "lucide-react"

// export default function SSOCallback() {
//   const { isLoaded: isSignInLoaded, signIn, setActive: setSignInActive } = useSignIn()
//   const { isLoaded: isSignUpLoaded, signUp, setActive: setSignUpActive } = useSignUp()

//   useEffect(() => {
//     if (!isSignInLoaded || !isSignUpLoaded) return

//     // Try to handle the callback for sign in/sign up
//     async function handleCallback() {
//       try {
//         let authResult
//         let isNewUser = false

//         // First try sign in
//         try {
//           authResult = await signIn.attemptFirstFactor({
//             strategy: "oauth_callback",
//             redirectUrl: "/sso-callback",
//           })

//           if (authResult.status === "complete") {
//             await setSignInActive({ session: authResult.createdSessionId })
//             // User signed in successfully
//           }
//         } catch (err) {
//           console.log("Sign in callback failed, trying sign up...", err)
//           isNewUser = true

//           // If sign in fails, try sign up
//           try {
//             authResult = await signUp.attemptFirstFactor({
//               strategy: "oauth_callback",
//               redirectUrl: "/sso-callback",
//             })

//             if (authResult.status === "complete") {
//               await setSignUpActive({ session: authResult.createdSessionId })
//               // New user signed up successfully
//             }
//           } catch (err) {
//             console.error("Sign up callback error:", err)
//             window.location.href = "/"
//             return
//           }
//         }

//         // If we have a successful auth result, get user data and send email
//         if (authResult && authResult.status === "complete") {
//           // Get user data from Clerk
//           const userResponse = await fetch("/api/user")
//           const userData = await userResponse.json()

//           if (userData && userData.id) {
//             // Send email notification with real user data
//             await fetch("/api/notify-signup", {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 name: userData.firstName + " " + userData.lastName,
//                 email: userData.emailAddresses[0]?.emailAddress || "No email provided",
//                 signupMethod: isNewUser ? "new_user_oauth" : "existing_user_oauth",
//                 provider: userData.externalAccounts?.[0]?.provider || "unknown",
//               }),
//             })
//           }

//           // Redirect to home page
//           window.location.href = "/"
//         }
//       } catch (err) {
//         console.error("Authentication callback error:", err)
//         window.location.href = "/"
//       }
//     }

//     handleCallback()
//   }, [isSignInLoaded, isSignUpLoaded, signIn, signUp, setSignInActive, setSignUpActive])

//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center">
//       <div className="text-center">
//         <Loader2 className="mx-auto h-12 w-12 animate-spin text-rose-600" />
//         <h1 className="mt-4 text-xl font-semibold">Completing your sign in...</h1>
//         <p className="mt-2 text-gray-500">You'll be redirected automatically.</p>
//       </div>
//     </div>
//   )
// }
