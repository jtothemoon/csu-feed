import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  iconActive?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, iconActive, ...props }, ref) => {
    return (
      <div className="relative w-full max-w-[350px] h-[45px] group">
        <div className="absolute inset-0 bg-white rounded-[9px] shadow-[0px_2px_2px_rgba(0,0,0,0.18)] border border-shaded-white focus-within:border-light-blue transition-colors">
          <div className="absolute left-2.5 top-2.5 flex flex-row items-center gap-[5px]">
            {icon && !iconActive && <div className="w-[26px] h-[26px] flex-none">{icon}</div>}
            {icon && iconActive && (
              <>
                <div className="w-[26px] h-[26px] flex-none group-focus-within:hidden">{icon}</div>
                <div className="w-[26px] h-[26px] flex-none hidden group-focus-within:block">{iconActive}</div>
              </>
            )}
          </div>
          <input
            type={type}
            className={cn(
              "absolute inset-0 bg-transparent border-none outline-none",
              "text-pale-gray text-xs font-medium",
              "px-2.5 py-2.5",
              icon ? "pl-[46px]" : "pl-2.5",
              "placeholder:text-pale-gray placeholder:text-xs placeholder:font-medium",
              "focus:text-tinted-black focus:placeholder:text-tinted-black",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
