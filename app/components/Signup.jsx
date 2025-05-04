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
  //     .setItem("hasSeenSignupPopup", "true")
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

    useEffect(() => {
      const hasSeenPopup = localStorage.getItem("hasSeenSignupPopup");
      if (!hasSeenPopup) {
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 12000);
        return () => clearTimeout(timer);
      }
    }, []);

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
        sessionStorage.setItem("hasSocialSignedUp", "true");

      } catch (error) {
        console.error(`Error with ${provider} signup:`, error);
        setFormStatus("error");
      }
    };
    

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 bg-opacity-50 p-4">
        <div className="relative w-full max-w-md rounded-xl bg-white shadow-2xl">
          {/* <button
            onClick={closePopup}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button> */}

          <div className="p-6 pt-10">
            <div className="mb-6 text-center">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">Join ShopOnline Pk Today!</h2>
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
              {/* <span className="mx-4 text-gray-400 text-sm">or continue with</span> */}
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            {/* <div className="grid grid-cols-2 gap-4">
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
            </div> */}

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

//   "use client"
// import { useState, useEffect } from "react"
// import { X, Mail, Phone, AlertCircle } from "lucide-react"
// import { handleSignup } from "@/lib/signup-actions"
// import Image from "next/image"
// import { useSignIn, useSignUp, useUser } from "@clerk/nextjs"

// export default function SignupPopup() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [email, setEmail] = useState("")
//   const [phoneNumber, setPhoneNumber] = useState("")
//   const [errors, setErrors] = useState({ email: "", phoneNumber: "" })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [formStatus, setFormStatus] = useState("idle")
//   const { signIn } = useSignIn()
//   const { signUp } = useSignUp()
//   const { user } = useUser()
//   console.log("sdasd",user)

//   useEffect(() => {
//     const hasSeenPopup = localStorage.getItem("hasSeenSignupPopup")

//     if (!isSignedIn) {
//       // Show popup for non-signed in users
//       if (!hasSeenPopup) {
//         const timer = setTimeout(() => {
//           setIsOpen(true)
//         }, 3000)
//         return () => clearTimeout(timer)
//       }
//     } else if (isSignedIn && user) {
//       // Handle social signup data sending
//       const hasSocialSignedUp = sessionStorage.getItem("hasSocialSignedUp")
//       if (hasSocialSignedUp !== "true") {
//         sessionStorage.setItem("hasSocialSignedUp", "true")

//         // Send user data to your email
//         handleSignup({
//           email: user.emailAddresses[0]?.emailAddress || "",
//           User_Name: user.fullName || "",
//           signupMethod: "social",
//         })
//           .then(() => console.log("Social signup email sent"))
//           .catch((err) => console.error("Failed to send social signup email:", err))
//       }
//     }
//   }, [isSignedIn, user])

//   const closePopup = () => {
//     setIsOpen(false)
//     localStorage.setItem("hasSeenSignupPopup", "true")
//   }

//   const validateForm = () => {
//     const newErrors = { email: "", phoneNumber: "" }
//     let isValid = true

//     if (!email) {
//       newErrors.email = "Email is required"
//       isValid = false
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = "Email is invalid"
//       isValid = false
//     }

//     if (phoneNumber && !/^[0-9+\-\s()]{10,15}$/.test(phoneNumber)) {
//       newErrors.phoneNumber = "Phone number is invalid"
//       isValid = false
//     }

//     setErrors(newErrors)
//     return isValid
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!validateForm()) return

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
//         setEmail("")
//         setPhoneNumber("")
//         setTimeout(() => closePopup(), 3000)
//       } else {
//         setFormStatus("error")
//       }
//     } catch (error) {
//       console.error("Form error:", error)
//       setFormStatus("error")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const handleSocialSignup = async (provider) => {
//     try {
//       const redirectUrl = "/";
  
//       if (signUp && signIn) {
//         await signUp.authenticateWithRedirect({
//           strategy: `oauth_${provider}`,
//           redirectUrl,
//           redirectUrlComplete: redirectUrl,
//         });
//       }
//     } catch (error) {
//       console.error(`Error with ${provider} signup:`, error);
//       setFormStatus("error");
//     }
//   };
  
  

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
//       <div className="relative w-full max-w-md rounded-xl bg-white shadow-2xl">
//         <button
//           onClick={closePopup}
//           className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
//           aria-label="Close"
//         >
//           <X className="h-6 w-6" />
//         </button>

//         <div className="p-6 pt-10">
//           <div className="mb-6 text-center">
//             <h2 className="mb-2 text-2xl font-bold text-gray-900">Join ShopMart Today!</h2>
//             <p className="text-gray-600">Sign up to receive exclusive offers and updates</p>
//           </div>

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
//                   className={`w-full rounded-lg border pl-10 pr-4 py-2.5 outline-none transition-colors focus:border-rose-500 focus:ring-2 focus:ring-rose-500 ${
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
//                   className={`w-full rounded-lg border pl-10 pr-4 py-2.5 outline-none transition-colors focus:border-rose-500 focus:ring-2 focus:ring-rose-500 ${
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

//           <div className="my-6 flex items-center">
//             <div className="flex-grow border-t border-gray-200"></div>
//             <span className="mx-4 flex-shrink text-gray-400">or continue with</span>
//             <div className="flex-grow border-t border-gray-200"></div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <button
//               type="button"
//               onClick={() => handleSocialSignup("google")}
//               className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
//             >
//               <Image
//                 src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
//                 alt="Google"
//                 width={19}
//                 height={19}
//               />
//             </button>

//             <button
//               type="button"
//               onClick={() => handleSocialSignup("facebook")}
//               className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
//             >
//               <Image
//                 src="https://cdn-icons-png.freepik.com/256/5968/5968764.png"
//                 alt="Facebook"
//                 width={19}
//                 height={19}
//               />
//             </button>
//           </div>

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
// // }
// "use client"

// import { useState, useEffect } from "react"
// import { X } from "lucide-react"
// import Image from "next/image"
// import { useSignUp, useSignIn, useUser } from "@clerk/nextjs"

// const Signup = () => {
//   const [showPopup, setShowPopup] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState(null)
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const { signUp } = useSignUp()
//   const { signIn } = useSignIn()
//   const { isSignedIn, user } = useUser()

//   useEffect(() => {
//     if (!isSignedIn) {
//       const timer = setTimeout(() => {
//         setShowPopup(true)
//       }, 3000)
//       return () => clearTimeout(timer)
//     }
//   }, [isSignedIn])

//   const notifyUserAuth = async () => {
//     try {
//       await fetch("/api/send-user-data", { method: "POST" })
//     } catch (err) {
//       console.error("Error sending notification:", err)
//     }
//   }

//   const handleSocialSignup = async (provider) => {
//     try {
//       setIsLoading(true)
//       await signIn.authenticateWithRedirect({
//         strategy: `oauth_${provider}`,
//         redirectUrl: "/",
//         redirectUrlComplete: "/",
//       })
//       await notifyUserAuth()
//     } catch (err) {
//       console.error(err)
//       setError("Social signup failed.")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     setError(null)

//     try {
//       await signUp.create({ emailAddress: email, password })
//       await signUp.prepareEmailAddressVerification({ strategy: "email_code" })
//       await notifyUserAuth()
//     } catch (err) {
//       console.error(err)
//       setError("Signup failed. Please check your email and try again.")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   if (!showPopup || isSignedIn) return null

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
//       <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
//         <div className="flex justify-between">
//           <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
//           <button onClick={() => setShowPopup(false)} className="text-gray-500 hover:text-gray-700">
//             <X className="h-5 w-5" />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="mt-8 space-y-6">
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           {error && (
//             <div className="rounded-lg bg-red-50 p-3 text-sm text-red-500">{error}</div>
//           )}

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
//           >
//             {isLoading ? "Signing up..." : "Sign Up"}
//           </button>

//           <div className="relative my-4">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300" />
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="bg-white px-2 text-gray-500">or continue with</span>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <button
//               type="button"
//               onClick={() => handleSocialSignup("google")}
//               className="flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50"
//             >
//               <Image
//                 src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
//                 alt="Google"
//                 width={20}
//                 height={20}
//                 className="mr-2"
//               />
//               Google
//             </button>

//             <button
//               type="button"
//               onClick={() => handleSocialSignup("facebook")}
//               className="flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50"
//             >
//               <Image
//                 src="https://cdn-icons-png.freepik.com/256/5968/5968764.png"
//                 alt="Facebook"
//                 width={20}
//                 height={20}
//                 className="mr-2"
//               />
//               Facebook
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Signup


// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Facebook } from "lucide-react";
// import { toast } from "sonner";

// const formSchema = z.object({
//   email: z.string().email("Invalid email address"),
//   username: z.string().min(3, "Username must be at least 3 characters"),
// });



// async function sendUserData(userData) {
//   try {
//     const response = await fetch("/api/send-email", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to send user data");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error sending user data:", error);
//     throw error;
//   }
// }

// export default function Home() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       username: "",
//     },
//   });

//   const onSubmit = async (values) => {
//     try {
//       setIsLoading(true);
//       await sendUserData({
//         email: values.email,
//         username: values.username,
//         provider: "email"
//       });
//       toast.success("Sign up successful!");
//       form.reset();
//       setIsOpen(false);
//     } catch (error) {
//       toast.error("Something went wrong. Please try again.");
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSocialLogin = async (provider) => {
//     try {
//       setIsLoading(true);
//       const dummyUser = {
//         email: "user@example.com",
//         username: "socialuser",
//         provider
//       };
//       await sendUserData(dummyUser);
//       toast.success(`${provider} login successful!`);
//       setIsOpen(false);
//     } catch (error) {
//       toast.error("Something went wrong with social login.");
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (

//     <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
//       <div className="max-w-md w-full mx-auto text-center space-y-8">
//         <div className="space-y-4">
//           <h1 className="text-3xl font-bold text-gray-800">Welcome</h1>
//           <p className="text-gray-600">
//             Sign up or login to access your account
//           </p>
//         </div>
        
//         <button 
//           onClick={() => setIsOpen(true)}
//           className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
//         >
//           Get Started
//         </button>
//       </div>

//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl p-8 w-full max-w-md relative animate-fade-in">
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
//             >
//               ✕
//             </button>
            
//             <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
//               Create Your Account
//             </h2>
            
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Email
//                 </label>
//                 <input
//                   {...form.register("email")}
//                   type="email"
//                   placeholder="your.email@example.com"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//                 />
//                 {form.formState.errors.email && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {form.formState.errors.email.message}
//                   </p>
//                 )}
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Username
//                 </label>
//                 <input
//                   {...form.register("username")}
//                   type="text"
//                   placeholder="username"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//                 />
//                 {form.formState.errors.username && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {form.formState.errors.username.message}
//                   </p>
//                 )}
//               </div>
              
//               <button 
//                 type="submit" 
//                 disabled={isLoading}
//                 className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isLoading ? "Processing..." : "Sign Up"}
//               </button>
//             </form>
            
//             <div className="relative my-8">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">
//                   Or continue with
//                 </span>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-2 gap-4">
//               <button 
//                 onClick={() => handleSocialLogin("Google")}
//                 disabled={isLoading}
//                 className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
//                   <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
//                   <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
//                   <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
//                   <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
//                 </svg>
//                 Google
//               </button>
              
//               <button 
//                 onClick={() => handleSocialLogin("Facebook")}
//                 disabled={isLoading}
//                 className="flex items-center justify-center px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#166FE5] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <Facebook className="w-5 h-5 mr-2" />
//                 Facebook
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }