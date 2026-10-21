import React from "react";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      className = "",
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-sm px-6 py-2.5 gap-2",
      lg: "text-base px-8 py-3.5 gap-2.5 font-semibold",
    };

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-[#f5e6ab] via-[#d4af37] to-[#c49a26] text-black font-semibold shadow-lg shadow-[#d4af37]/20 hover:shadow-[#d4af37]/35 hover:brightness-105 border border-white/20",
      secondary:
        "bg-[#181822] text-[#f4f4f5] border border-[#2e2e3d] hover:border-[#d4af37]/50 hover:bg-[#1f1f2c] hover:text-white shadow-md shadow-black/40",
      outline:
        "border border-[#d4af37]/40 text-[#f5e6ab] bg-transparent hover:bg-[#d4af37]/10 hover:border-[#d4af37]",
      ghost:
        "text-[#d4d4d8] hover:text-white hover:bg-white/5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" aria-hidden="true" />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
