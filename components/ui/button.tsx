import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex flex-row justify-center items-center",
          "w-[150px] h-[45px]",
          "px-[11px] py-[7px] gap-2.5",
          "rounded-lg",
          "font-bold text-sm leading-[17px]",
          "shadow-[1px_2px_2px_rgba(0,0,0,0.4)]",
          "transition-all",
          variant === "default" && [
            "bg-light-blue text-white",
            "hover:bg-opacity-90 active:bg-primary active:border-[0.5px] active:border-dark-gray",
          ],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
