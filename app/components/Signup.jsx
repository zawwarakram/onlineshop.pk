// "use client"
// import { useState, useEffect } from "react"
// import { X, Mail, Phone, AlertCircle } from "lucide-react"
// import { handleSignup } from "@/lib/signup-actions"
// import Image from "next/image"
// import { useSignIn, useSignUp } from "@clerk/nextjs"

// export default function SignupPopup() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [email, setEmail] = useState("")
//   const [phoneNumber, setPhoneNumber] = useState("")
//   const [errors, setErrors] = useState({ email: "", phoneNumber: "" })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [formStatus, setFormStatus] = useState("idle")
//   const { signIn } = useSignIn();
//   const { signUp } = useSignUp();
//   useEffect(() => {
//     // Check if the user has already seen the popup
//     const hasSeenPopup = localStorage.getItem("hasSeenSignupPopup")

//     if (!hasSeenPopup) {
//       // Show popup after 3 seconds
//       const timer = setTimeout(() => {
//         setIsOpen(true)
//       }, 3000)

//       return () => clearTimeout(timer)
//     }
//   }, [])

//   const closePopup = () => {
//     setIsOpen(false)
//     // Remember that the user has seen the popup
//     localStorage.setItem("hasSeenSignupPopup", "true")
//   }

//   const hanldeAuthenticateUsingSocial = async (provider) => {
//     try {
//       if (activeTab === "login") {
//         await signIn.authenticateWithRedirect({
//           strategy: `oauth_${provider}`,
//           redirectUrl: "/",
//           redirectUrlComplete: "/",
//         });
//       } else {
//         await signUp.authenticateWithRedirect({
//           strategy: `oauth_${provider}`,
//           redirectUrl: "/",
//           redirectUrlComplete: "/",
//         });
//       }
//     } catch (error) {
//       console.error("Authentication error:", error);
//     }
//   };
//   const validateForm = () => {
//     const newErrors = { email: "", phoneNumber: "" }
//     let isValid = true

//     // Validate email
//     if (!email) {
//       newErrors.email = "Email is required"
//       isValid = false
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = "Email is invalid"
//       isValid = false
//     }

//     // Validate phone number (optional)
//     if (phoneNumber && !/^[0-9+\-\s()]{10,15}$/.test(phoneNumber)) {
//       newErrors.phoneNumber = "Phone number is invalid"
//       isValid = false
//     }

//     setErrors(newErrors)
//     return isValid
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!validateForm()) {
//       return
//     }

//     setIsSubmitting(true)
//     setFormStatus("idle")

//     try {
//       const result = await handleSignup({
//         email,
//         phoneNumber,
//         signupMethod: "form",
//       })

//       if (result.success) {
//         setFormStatus("success")
//         // Reset form
//         setEmail("")
//         setPhoneNumber("")

//         // Close popup after 3 seconds on success
//         setTimeout(() => {
//           closePopup()
//         }, 3000)
//       } else {
//         setFormStatus("error")
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error)
//       setFormStatus("error")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const handleSocialSignup = async (provider) => {
//     try {
//       // In a real implementation, you would integrate with the social provider's SDK
//       // For now, we'll just send a notification that someone tried to sign up with this method
//       await handleSignup({
//         email: "",
//         phoneNumber: "",
//         signupMethod: provider,
//       })

//       setFormStatus("success")

//       // Close popup after 3 seconds on success
//       setTimeout(() => {
//         closePopup()
//       }, 3000)
//     } catch (error) {
//       console.error(`Error with ${provider} signup:`, error)
//       setFormStatus("error")
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
//       <div className="relative w-full max-w-md rounded-xl bg-white shadow-2xl">
//         {/* Close button */}
//         <button
//           onClick={closePopup}
//           className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
//           aria-label="Close"
//         >
//           <X className="h-6 w-6" />
//         </button>

//         {/* Popup content */}
//         <div className="p-6 pt-10">
//           {/* Header */}
//           <div className="mb-6 text-center">
//             <h2 className="mb-2 text-2xl font-bold text-gray-900">Join ShopMart Today!</h2>
//             <p className="text-gray-600">Sign up to receive exclusive offers and updates</p>
//           </div>

//           {/* Status messages */}
//           {formStatus === "success" && (
//             <div className="mb-6 rounded-lg bg-green-50 p-4 text-green-700">
//               <p className="font-medium">Thank you for signing up!</p>
//               <p className="text-sm">You'll receive our latest offers and updates soon.</p>
//             </div>
//           )}

//           {formStatus === "error" && (
//             <div className="mb-6 flex items-start rounded-lg bg-red-50 p-4 text-red-700">
//               <AlertCircle className="mr-3 h-5 w-5 flex-shrink-0" />
//               <div>
//                 <p className="font-medium">Something went wrong!</p>
//                 <p className="text-sm">Please try again or contact support.</p>
//               </div>
//             </div>
//           )}

//           {/* Signup form */}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
//                 Email Address <span className="text-rose-600">*</span>
//               </label>
//               <div className="relative">
//                 <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                   <Mail className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className={`w-full rounded-lg border pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-colors ${
//                     errors.email ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="your.email@example.com"
//                   disabled={isSubmitting}
//                 />
//               </div>
//               {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//             </div>

//             <div>
//               <label htmlFor="phoneNumber" className="mb-1 block text-sm font-medium text-gray-700">
//                 Phone Number (Optional)
//               </label>
//               <div className="relative">
//                 <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                   <Phone className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="tel"
//                   id="phoneNumber"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   className={`w-full rounded-lg border pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-colors ${
//                     errors.phoneNumber ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="+92 300 1234567"
//                   disabled={isSubmitting}
//                 />
//               </div>
//               {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>}
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full rounded-lg bg-rose-600 py-3 font-medium text-white transition-colors hover:bg-rose-700 disabled:bg-rose-400"
//             >
//               {isSubmitting ? "Signing Up..." : "Sign Up"}
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="my-6 flex items-center">
//             <div className="flex-grow border-t border-gray-200"></div>
//             <span className="mx-4 flex-shrink text-gray-400">or continue with</span>
//             <div className="flex-grow border-t border-gray-200"></div>
//           </div>

//           {/* Social login buttons */}
//           <div className="grid grid-cols-2 gap-4">
//           <button
//                     type="button"
//                     disabled={isLoading}
//                     onClick={() => hanldeAuthenticateUsingSocial("google")}
//                     className="inline-flex h-10 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
//                   >
//                     <Image
//                       src={
//                         "https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
//                       }
//                       alt="google icon"
//                       width={19}
//                       height={19}
//                     />
//                   </button>

//                   <button
//                     type="button"
//                     disabled={isLoading}
//                     onClick={() => hanldeAuthenticateUsingSocial("facebook")}
//                     className="inline-flex h-10 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
//                   >
//                     <Image
//                       src="https://cdn-icons-png.freepik.com/256/5968/5968764.png?semt=ais_hybrid"
//                       alt="facebook icon"
//                       width="19"
//                       height="19"
//                     />
//                   </button>
//           </div>

//           {/* Terms and privacy */}
//           <p className="mt-6 text-center text-xs text-gray-500">
//             By signing up, you agree to our{" "}
//             <a href="/terms" className="text-rose-600 hover:underline">
//               Terms of Service
//             </a>{" "}
//             and{" "}
//             <a href="/privacy" className="text-rose-600 hover:underline">
//               Privacy Policy
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client";
import { useState, useEffect } from "react";
import { X, Mail, Phone, AlertCircle } from "lucide-react";
import { handleSignup } from "@/lib/signup-actions";
import Image from "next/image";
import { useSignIn, useSignUp, useUser } from "@clerk/nextjs";

export default function SignupPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({ email: "", phoneNumber: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");
  const { signIn } = useSignIn();
  const { isSignedIn, user } = useUser();
    const { signUp } = useSignUp();

//   useEffect(() => {
//     const hasSeenPopup = localStorage.getItem("hasSeenSignupPopup");
//     if (!hasSeenPopup) {
//       const timer = setTimeout(() => {
//         setIsOpen(true);
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, []);

useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenSignupPopup");
  
    if (!isSignedIn) {
      // Form signup ke liye popup dikhana
      if (!hasSeenPopup) {
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 3000);
        return () => clearTimeout(timer);
      }
    } else if (isSignedIn && user) {
      // Social signup ke baad email bhejna
      const hasSocialSignedUp = sessionStorage.getItem("hasSocialSignedUp");
      if (hasSocialSignedUp !== "true") {
        sessionStorage.setItem("hasSocialSignedUp", "true");
  
        handleSignup({
          email: user.emailAddresses[0]?.emailAddress || "",
          User_Name: user.fullName || "",
          signupMethod: "social",
        })
          .then(() => console.log("Social signup email sent"))
          .catch((err) =>
            console.error("Failed to send social signup email:", err)
          );
      }
    }
  }, [isSignedIn, user]);
  
  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenSignupPopup", "true");
  };

  const validateForm = () => {
    const newErrors = { email: "", phoneNumber: "" };
    let isValid = true;

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (phoneNumber && !/^[0-9+\-\s()]{10,15}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Phone number is invalid";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      const result = await handleSignup({
        email,
        phoneNumber,
        signupMethod: "form",
      });

      if (result.success) {
        setFormStatus("success");
        setEmail("");
        setPhoneNumber("");
        setTimeout(() => closePopup(), 3000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Form error:", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialSignup = async (provider) => {
    try {
      sessionStorage.setItem("hasSocialSignedUp", "false"); // reset flag
      await signIn.authenticateWithRedirect({
        strategy: `oauth_${provider}`,
        redirectUrl: "/",
        redirectUrlComplete: "/",
      });
    } catch (error) {
      console.error(`Error with ${provider} signup:`, error);
      setFormStatus("error");
    }
  };
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative w-full max-w-md rounded-xl bg-white shadow-2xl">
        <button
          onClick={closePopup}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-6 pt-10">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">Join ShopMart Today!</h2>
            <p className="text-gray-600">Sign up to receive exclusive offers and updates</p>
          </div>

          {formStatus === "success" && (
            <div className="mb-6 rounded-lg bg-green-50 p-4 text-green-700">
              <p className="font-medium">Thank you for signing up!</p>
            </div>
          )}

          {formStatus === "error" && (
            <div className="mb-6 flex items-start rounded-lg bg-red-50 p-4 text-red-700">
              <AlertCircle className="mr-3 h-5 w-5 flex-shrink-0" />
              <div>
                <p className="font-medium">Something went wrong!</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  placeholder="your.email@example.com"
                  className={`w-full rounded-lg border pl-10 pr-4 py-2.5 transition-colors outline-none focus:ring-2 focus:ring-rose-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number (Optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  disabled={isSubmitting}
                  placeholder="+92 300 1234567"
                  className={`w-full rounded-lg border pl-10 pr-4 py-2.5 transition-colors outline-none focus:ring-2 focus:ring-rose-500 ${
                    errors.phoneNumber ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>
              {errors.phoneNumber && <p className="text-sm text-red-600 mt-1">{errors.phoneNumber}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-rose-600 py-3 font-medium text-white transition-colors hover:bg-rose-700 disabled:bg-rose-400"
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="mx-4 text-gray-400 text-sm">or continue with</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => handleSocialSignup("google")}
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
            >
              <Image
                src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
                alt="google icon"
                width={19}
                height={19}
              />
            </button>

            <button
              type="button"
              onClick={() => handleSocialSignup("facebook")}
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
            >
              <Image
                src="https://cdn-icons-png.freepik.com/256/5968/5968764.png"
                alt="facebook icon"
                width={19}
                height={19}
              />
            </button>
          </div>

          <p className="mt-6 text-center text-xs text-gray-500">
            By signing up, you agree to our{" "}
            <a href="/terms" className="text-rose-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-rose-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
