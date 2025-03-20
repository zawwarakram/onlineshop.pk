export default function CustomButton({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  className = "",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 border border-transparent",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-transparent",
    outline: "bg-transparent text-gray-900 hover:bg-gray-100 border border-gray-300",
  }

  const sizeClasses = {
    small: "text-sm px-3 py-1.5",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3",
  }

  const widthClass = fullWidth ? "w-full" : ""

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}

